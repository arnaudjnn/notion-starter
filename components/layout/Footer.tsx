/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { Grid, Flex, IconButton, Text, List, ListItem } from '@chakra-ui/core';
import { Angulaire } from 'components/common/Logo';
import { Container }from 'components/layout/Container';
import Link from 'next-translate/Link';
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';
import siteConfig from 'siteconfig.json';

export default function Footer() {
  const { t, lang } = useTranslation()
  const categories = t('global:footer.categories', {}, { returnObjects: true })
  const logos = {
    "Facebook": AiFillFacebook,
    "Twitter": AiFillTwitterSquare,
    "LinkedIn": AiFillLinkedin
  };

  return (
    <Container as="footer" size="large" variant="footer">
      <Grid gridTemplateColumns={['1fr', '3fr 5fr',]} gridGap={[10]} mb={[10, 5]}>
        <div>
          <div>
            <Angulaire width="10rem"/>
          </div>
          <Text mt="8" fontSize="sm">{t('global:footer.headline')}</Text>
        </div>
        <Grid gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)',]} gridGap={4}>
          {categories.map((category, index) => (
            <div key={index}>
              <Text as="h6" mb="5">{category.title}</Text>
              <List>
                {category.links.map((link, i) => (
                  <ListItem key={i} mb="1">
                    <Link href={link.url}>
                      <a>{link.text}</a>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid gridTemplateColumns={['1fr', '1fr 1fr',]}>
        <Flex alignItems="flex-end" justifyContent={['center', 'flex-start']} order={[2, 1]}>
          <Text fontSize="xs">Copyright © 2020 Angulaire All rights reserved.</Text>
        </Flex>
        <Flex alignItems="flex-end" justifyContent={['center', 'flex-end']} order={[1, 2]} mb={[10, 0]}>
          <List display="flex">
            {siteConfig.contact.socials.map((social, i) => {
              const Logo = logos[social.network]
              return (
                <ListItem key={i}>
                  <a href={social.url} target="_blank" rel="nofollow">
                    <Logo fontSize="24px"/>
                  </a>
                </ListItem>
              )
            })}
          </List>
        </Flex>
      </Grid>
    </Container>
  );
}