import { Box, Grid, Flex, Heading, Text } from '@chakra-ui/core';
import { Container } from 'components/layout/Container';
import { Button } from 'components/common/Button';
import Link from 'next-translate/Link';

export default function Hero({ title, description, button }) {
  return (
    <Container>
      <Flex 
        alignItems="center" 
        justifyContent="flex-start" 
        flexDirection="column" 
        textAlign="center"
      >
        <Heading as="h1" textStyle="heroTitle" mx="auto" maxWidth="3xl" mt="16">{title}</Heading>
        <Text color="grey.300" mx="auto" maxWidth="xl" fontWeight="300" fontSize="2xl" my="8">{description}</Text>
        <Link href="/blog">
          <a>
            <Button>{button.text}</Button>
          </a>
        </Link>
      </Flex>
    </Container>
  )
}