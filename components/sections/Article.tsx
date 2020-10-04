/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { Box, Flex, Heading, UnorderedList, ListItem } from '@chakra-ui/core';
import { NotionRenderer, BlockMapType } from 'react-notion';
import useTranslation from 'next-translate/useTranslation';
import { Container } from 'components/layout/Container';
import readingTime from 'reading-time';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import Author from 'components/common/Author';

export default function Article({ title, date, content, authors }) {
  const { t, lang } = useTranslation()
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const localeDate = new Intl.DateTimeFormat(lang, options).format(new Date(date))
  const texts: any = Object.values(content).filter((section: any) => section.value.type === 'text').map((section: any) => (section.value.properties?.title)).flat(Infinity).join()
  const { minutes } = readingTime(texts);

  return (
    <Container as="article" size="center">
      <Box mb="10">
        <Heading as="h1" textStyle="h1" my="8">{title}</Heading>
        <UnorderedList 
          display="flex" 
          ml="0" 
          sx={{ 'li:first-child': { listStyleType: 'none' }}}>
          <ListItem mr="8" color="grey.300">
            <Box as="time" display="flex" alignItems="center">
              <span sx={{ mr: '5px' }}><AiOutlineCalendar /></span>
              <span>{localeDate}</span>
            </Box>
          </ListItem>
          <ListItem mr="8" color="grey.300">
            <Box as="time" display="flex" alignItems="center">
              <span sx={{ mr: '5px' }}><AiOutlineClockCircle /></span>
              <span>{`${Math.ceil(minutes)} min. ${t('common:read')}`}</span>
            </Box>
          </ListItem>
        </UnorderedList>
      </Box>
      <NotionRenderer blockMap={content} />
      <Author author={authors[0]}/>
    </Container>
  )
}