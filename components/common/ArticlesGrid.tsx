import { Grid } from '@chakra-ui/core';
import ArticleCard from 'components/common/ArticleCard';
import { Container } from 'components/layout/Container';

export default function ArticlesGrid({ articles }) {
  return (
    <Container>
      <Grid gridTemplateColumns={['1fr', 'repeat(3, 1fr)']} gridGap={10}>
        {articles.length > 1 && articles.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </Grid>
    </Container>
  );
};
