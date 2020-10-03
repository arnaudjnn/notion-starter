/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { Flex, Heading, Text } from '@chakra-ui/core';
import ReactMarkdown from 'react-markdown';
import useTranslation from 'next-translate/useTranslation';
import { Container } from 'components/layout/Container';

export default function Article({ title, category, date, content, coverImage }) {
  const { t, lang } = useTranslation()
  const localeDate = new Intl.DateTimeFormat(lang).format(new Date(date))

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
      <figure>
        <img 
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_auto:100,dpr_auto/${coverImage}`} 
          alt={`Cover Image for ${title}`}
        />
      </figure>
      <ReactMarkdown sx={{ mt: 10 }} source={content} />
    </Container>
  )
}