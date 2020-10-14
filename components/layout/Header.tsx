/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { Grid, Flex, List, ListItem } from '@chakra-ui/core';
import { Media } from 'components/layout/Media';
import { Container } from 'components/layout/Container';
import { Button } from 'components/common/Button';
import { NotionStarter } from 'components/common/Logo';
import Link from 'next-translate/Link';
import LangSelect from 'components/common/LangSelect';
import MobileMenu from 'components/layout/MobileMenu';

type HeaderProps = {
  menu: {
    links: {
      url: string
      text: string
      targetBlank: boolean
    }[]
  }
}

export default function Header({ menu }: HeaderProps) {
  const Logo = NotionStarter
    
  return (
    <Container 
      as="header" 
      variant="header" 
      size="largePY0"
    >
        <Grid gridTemplateColumns={['60% repeat(2, auto)', '1fr auto auto']} height="100%">
        <Flex alignItems="center" justifyContent="flex-start">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end">
          <Media greaterThan="xs">
            <nav>
              <List display="flex">
                {menu.links.map(link => (
                  <ListItem key={link.url}>
                    <Link href={link.url}>
                      <Button variant="link">{link.text}</Button>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </nav>
          </Media>
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end">
          <Media greaterThan="xs" sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <Button variant="outline" mr="3">Login</Button>
            <Button mr="3">Signup</Button>
            <LangSelect />
          </Media>
          <Media at="xs">
            <MobileMenu logo={<Logo />} links={menu.links}/>
          </Media>
        </Flex>
      </Grid>
    </Container>
  );
};