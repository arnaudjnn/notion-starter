import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllArticles, getArticleBySlug } from 'lib/notion';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from 'components/layout/Layout';
import Hero from 'components/sections/Hero';
import Header from 'components/layout/Header';
import ArticlesGrid from 'components/common/ArticlesGrid';
import Article from 'components/sections/Article';
import useTranslation from 'next-translate/useTranslation';

export default function DynamicPage({ globalData, pageData }) {
  const router = useRouter()

  // Use globalData from CMS instead
  const { t } = useTranslation()
  const menu = { links: t('global:header.links', {}, { returnObjects: true })}

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
              description={section.description}
              button={section.button}
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
    { slug: 'blog' },
  ]
  const pagePaths = pages.map(page => ({
    params: { slug: [page.slug] }
  }))

  const articles = await getAllArticles()
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
    const article = await getArticleBySlug(lang, lastSlug)
    pageData = {
      metadata: {
        metaTitle: article.title,
        metaDescription: article.description
      },
      sections: [
        {
          template: 'article',
          article
        }
      ]
    }
  } else if(slugArray.length === 1 && firstSlug === "blog") {
    const articles = await getAllArticles(lang)

    pageData = {
      metadata: {
        metaTitle: "Blog",
        metaDescription: "metaDescription from CMS"
      },
      sections: [
        {
          template: 'articles-grid',
          articles
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
    },
    revalidate: 1
  }
}