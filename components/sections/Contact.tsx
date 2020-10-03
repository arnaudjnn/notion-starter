/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { Grid, Flex, Heading } from '@chakra-ui/core';
import { Container } from 'components/layout/Container';
import { Card } from 'components/common/Card';
import ContactForm from 'components/form/Contact';
import ReactMarkdown from 'react-markdown';
import useTranslation from 'next-translate/useTranslation';
import siteConfig from 'siteconfig.json';


export default function Contact({ title }) {
  const { t, lang } = useTranslation()
  const translation = t('contact:sections', {}, { returnObjects: true }).find(section => section.template === 'contact-section')

  return (
    <Container>
      <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gridGap={[10, 40]}>
        <Flex justifyContent="center" alignItems="center">
          <div>
            <Heading as="h1" mb={10}>{translation.title}</Heading>
            <div>
              <ReactMarkdown source={siteConfig.contact.address} />
              <p sx={{mt: 5, 'span': { display: 'block' }}}>
                <span>{`Tel: ${siteConfig.contact.phone}`}</span>
                <span>{`Email: ${siteConfig.contact.email}`}</span>
              </p>
            </div>
          </div>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Card width="100%">
            <ContactForm />
          </Card>
        </Flex>
      </Grid>
    </Container>
  )
}