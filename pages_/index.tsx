import { GetStaticProps } from 'next';
import Layout from 'components/layout/Layout';
import Header from 'components/layout/Header';
import Hero from 'components/sections/Hero';
import useTranslation from 'next-translate/useTranslation';

export default function Homepage({ globalData, pageData }) {

  // Use globalData from CMS instead
  const { t } = useTranslation()
  const menu = { links: t('global:header.links', {}, { returnObjects: true })}
  const sections = t('home:sections', {}, { returnObjects: true })

  return (
    <Layout 
      metadata={pageData.metadata}
      header={<Header menu={menu}/>}
    >
      {sections.map(section => {
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
      })}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  let pageData = null
  let globalData = null
  pageData = {
    metadata: {
      metaTitle: "Wooclap - An interactive platform that makes learning awesome",
      metaDescription: "A collaborative platform for your classes, conferences and training sessions. Intuitive and simple, Wooclap makes your presentations interactive."
    },
    sections: [
      {
        template: 'hero',
        title: "Title from CMS"
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