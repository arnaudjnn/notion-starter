import { GetStaticProps } from 'next';
import Layout from 'components/layout/Layout';
import Header from 'components/layout/Header';
import Hero from 'components/sections/Hero';
import useTranslation from 'next-translate/useTranslation';

export default function Homepage({ globalData, pageData }) {

  // Use globalData when translations come from CMS
  const { t } = useTranslation()
  const menu = {
    links: t('global:header.links', {}, { returnObjects: true })
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
      })}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  let pageData = null
  let globalData = null
  pageData = {
    metadata: {
      metaTitle: "metaTitle from CMS",
      metaDescription: "metaDescription from CMS"
    },
    sections: [
      {
        template: 'hero',
        title: "Quickstart awesome websites"
      }
    ]
  }

  return {
    props: {
      globalData,
      pageData
    }
  }
}