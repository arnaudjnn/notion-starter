/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { Flex, Heading, Text } from '@chakra-ui/core';
import { NotionRenderer, BlockMapType } from 'react-notion';
import useTranslation from 'next-translate/useTranslation';
import { Container } from 'components/layout/Container';

export default function Article({ title, category, date, content }) {
  const { t, lang } = useTranslation()
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const localeDate = new Intl.DateTimeFormat(lang, options).format(new Date(date))

  return (
    <Container as="article" size="default">
      <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <Flex justifyContent="flex-end" px={5}>
          <Text fontWeight="bold">{category}</Text>
        </Flex>
        <Flex justifyContent="flex-start" px={5}>
          <time sx={{ fontWeight: 'bold' }}>{localeDate}</time>
        </Flex>
      </div>
      <Heading as="h1" my={[10, 20]}>{title}</Heading>
      <NotionRenderer blockMap={content} />
    </Container>
  )
}