import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllArticles, getArticleBySlug } from 'lib/api';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from 'components/layout/Layout';
import Hero from 'components/sections/Hero';
import Header from 'components/layout/Header';
import Contact from 'components/sections/Contact';
import ArticlesGrid from 'components/common/ArticlesGrid';
import Article from 'components/sections/Article';
import useTranslation from 'next-translate/useTranslation';

export default function DynamicPage({ globalData, pageData }) {
  const router = useRouter()

  // Use globalData when translations come from CMS
  const { t } = useTranslation()
  const menu = {
    links: t('global:header.links', {}, { returnObjects: true })
  }

  if (!router.isFallback && !pageData?.sections.length) {
    return <ErrorPage statusCode={404} />;
  }

  if(router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout 
      metadata={pageData.metadata}
      header={<Header menu={menu}/>}
    >
      {pageData.sections.map(section => {
        if (section.template === 'hero'){
          return (
            <Hero 
              key={section.template}
              title={section.title}
              image={section.image}
              alt={section.alt}
            />
          )
        }
        if (section.template === 'article'){
          return (
            <Article
              key={section.template} 
              {...section.article}
            />
          )
        }
        if (section.template === 'contact-section'){
          return (
            <Contact
              key={section.template}
              title={section.title}
            />
          )
        }
        if (section.template === 'articles-grid'){
          return (
            <ArticlesGrid 
              key={section.template} 
              articles={section.articles}
            />
          )
        }
      })}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const pages = [
    { slug: 'contact' },
    { slug: 'blog' },
  ]
  const pagePaths = pages.map(page => ({
    params: { slug: [page.slug] }
  }))

  const articles = await getAllArticles('en', ['slug'])
  const articlePaths = articles.map(article => ({
    params: { slug: [ 'blog', article.slug ]}
  }))

  const paths = [...pagePaths, ...articlePaths]

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { params: { slug: slugArray }, lang } = ctx
  const lastSlug = slugArray[slugArray?.length - 1]
  const firstSlug = slugArray[0]

  let pageData = null
  let globalData = null
  if(slugArray.length > 1 && firstSlug === "blog") {
    const article = getArticleBySlug(
      lang,
      lastSlug, 
      [
        'title',
        'date',
        'slug',
        'content',
        'coverImage',
        'category',
        'author'
      ]
    )
    pageData = {
      metadata: {
        metaTitle: "metaTitle from CMS",
        metaDescription: "metaDescription from CMS"
      },
      sections: [
        {
          template: 'article',
          article
        }
      ]
    }
  } else if(slugArray.length === 1 && firstSlug === "blog") {
    const articles = getAllArticles(
      lang,
      [
        'title',
        'description',
        'coverImage',
        'slug',
        'content',
        'date',
        'category',
        'author'
      ]
    )
    pageData = {
      metadata: {
        metaTitle: "metaTitle from CMS",
        metaDescription: "metaDescription from CMS"
      },
      sections: [
        {
          template: 'articles-grid',
          articles
        }
      ]
    }
  } else if(firstSlug === "contact") {
    pageData = {
      metadata: {
        metaTitle: "metaTitle from CMS",
        metaDescription: "metaDescription from CMS"
      },
      sections: [
        {
          template: 'contact-section',
          title: "Title from CMS"
        }
      ]
    }
  }

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} };
  }

  return {
    props: {
      globalData,
      pageData
    }
  }
}