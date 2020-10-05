/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { Box, Flex, Heading, UnorderedList, ListItem } from '@chakra-ui/core';
import { NotionRenderer, BlockMapType } from 'react-notion';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import { Container } from 'components/layout/Container';
import readingTime from 'reading-time';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import Author from 'components/common/Author';
import { Button } from 'components/common/Button';

export default function Article({ title, date, content, authors }) {
  const { t, lang } = useTranslation()
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const localeDate = new Intl.DateTimeFormat(lang, options).format(new Date(date))
  const texts: any = Object.values(content).filter((section: any) => section.value.type === 'text').map((section: any) => (section.value.properties?.title)).flat(Infinity).join()
  const { minutes } = readingTime(texts);
  const button: object = Object.entries(content).map((e) => ( { [e[0]]: e[1] } )).find((section: object) => {
    const value = Object.values(section)[0].value
    if(value.properties && value.properties.title) {
      return value.properties.title[0][0].includes("{{")
    }
  })

  let callToAction
  if(button) {
    const buttonKey = Object.keys(button)[0]
    content[Object.keys(content)[0]].value.content = content[Object.keys(content)[0]].value.content.filter(section => section !== buttonKey)
    const string = button[buttonKey].value.properties.title[0][0]
    const href = string.split('href="')[1].split('"')[0]
    const variant = string.split('variant="')[1].split('"')[0]
    const text = string.split('>')[1].split('<')[0]
    callToAction = (
      <Box my="10">
        <Link href={href}>
          <Button display="block" mx="auto"variant={variant}>{text}</Button>
        </Link>
      </Box>
    )
  }

  return (
    <Container as="article" size="center">
      <Box mb="10">
        <Heading as="h1" textStyle="h1" my="8">{title}</Heading>
        <UnorderedList 
          display="flex" 
          ml="0" 
          sx={{ 'li:first-of-type': { listStyleType: 'none' }}}>
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
      {callToAction}
      <Author author={authors[0]}/>
    </Container>
  )
}