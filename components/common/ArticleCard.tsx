/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { Box, Grid, Flex, Heading, Text, SystemStyleObject } from '@chakra-ui/core';
import { NotionRenderer, BlockMapType } from 'react-notion';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';
import readingTime from 'reading-time';
import { Card } from 'components/common/Card';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

const StyledCard = {
  overflow: 'hidden',
  '.notion-asset-wrapper': {
    m: 0,
    width: '100% !important',
    '& > div': {
      minHeight: '13rem',
      img: {
        objectFit: 'cover',
      }
    },
  }
}

export default function ArticleCard({ article, variant="default" }) {
  const { t, lang } = useTranslation()
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Intl.DateTimeFormat(lang, options).format(new Date(article.date))
  const coverImage: any = Object.values(article.content).find((section: any) => section.value.type === 'image')
  const texts: any = Object.values(article.content).filter((section: any) => section.value.type === 'text').map((section: any) => (section.value.properties?.title)).flat(Infinity).join()
  const { minutes } = readingTime(texts);

  return (
    <Link href="/blog/[slug]" as={`/blog/${article.slug}`}>
      <a sx={{ '&:hover': { opacity: 1 }}}>
        <Card as="article" size="defaultP0" variant="animated" sx={StyledCard}>
          <Grid gridTemplateColumns={variant === 'full' ? ['1fr', '1fr 1fr'] : '1fr' }>
            <NotionRenderer blockMap={{coverImage}} />
            <Flex p="10" flexDirection="column" justifyContent="space-between" flex="1">
              <div>
                <Heading 
                  as="h2" 
                  textStyle="h3"
                  mb="4"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2 as SystemStyleObject,
                    WebkitBoxOrient: 'vertical' as SystemStyleObject,
                    overflow: 'hidden'
                  }}
                >
                  {article.title}
                </Heading>
                {variant === 'full' &&
                  <Text color="grey.300" display={['none', 'block']}>{article.description}</Text>
                }
              </div>
              <div>
                <Grid gridTemplateColumns={'1fr 1fr'}>
                  <Flex>
                    <Box as="time" color="grey.300" display="flex" alignItems="center">
                      <span sx={{ mr: '5px' }}><AiOutlineCalendar /></span>
                      <span>{date}</span>
                    </Box>
                  </Flex>
                  <Flex justifyContent="flex-end">
                    <Box color="grey.300" display="flex" alignItems="center">
                      <span sx={{ mr: '5px' }}><AiOutlineClockCircle /></span>
                      <span>{`${Math.ceil(minutes)} min. ${t('common:read')}`}</span>
                    </Box>
                  </Flex>
                </Grid>
              </div>
            </Flex>
          </Grid>
        </Card>
      </a>
    </Link>
  )
}