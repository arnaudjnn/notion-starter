import { Grid } from '@chakra-ui/core';
import ArticleCard from 'components/common/ArticleCard';
import { Container } from 'components/layout/Container';

export default function ArticlesGrid({ articles }) {
  return (
    <Container>
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
    </Container>
  );
};
