import { Grid, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import ArticleCard from 'components/common/ArticleCard';
import { Container } from 'components/layout/Container';
import useTranslation from 'next-translate/useTranslation';

export default function ArticlesGrid({ articles }) {
  const { t, lang } = useTranslation()
  const sortedArticles = articles.map(article => {
    article.date = new Date(article.date)
    return article
  }).slice().sort((a, b) => b.date - a.date).filter(article => !!article.published)
  const trendingArticles = sortedArticles.filter(article => !!article.trending)

  return (
    <Container>
      <Tabs width="100%">
        <TabList borderColor="transparent" px="5">
          <Tab fontFamily="heading" fontWeight="black" _selected={{ color: 'primary', borderColor: 'primary' }}>{t('common:trendingArticles')}</Tab>
          <Tab fontFamily="heading" fontWeight="black" _selected={{ color: 'primary', borderColor: 'primary' }}>{t('common:lastArticles')}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Articles articles={trendingArticles}/>
          </TabPanel>
          <TabPanel>
            <Articles articles={sortedArticles}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

function Articles({ articles }) {
  return (
    <>
      <ArticleCard 
        article={articles[0]}
        variant="full"
      />
      <Grid gridTemplateColumns={['1fr', 'repeat(3, 1fr)']} gridGap="10" mt="10">
        {articles.length > 1 && articles.slice(1).map(article => (
          <ArticleCard 
            key={article.slug} 
            article={article} 
          />
        ))}
      </Grid>
    </>
  )
}
