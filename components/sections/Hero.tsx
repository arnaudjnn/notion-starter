import { jsx, Grid, Flex, Image } from '@chakra-ui/core';
import { Container } from 'components/layout/Container';

export default function Hero({ title, image, alt }) {
  return (
    <Container>
      <Grid gridTemplateColumns={['1fr', '1fr 1fr']}>
        <Flex alignItems="center" justifyContent="flex-start">
          <h1>{title}</h1>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Image
            src="/computer-scene.svg"
            objectFit="cover"
            width="100%"
          />
        </Flex>
      </Grid>
    </Container>
  )
}