/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import Footer from 'components/layout/Footer';

type LayoutProps = {
  header?: React.ReactNode;
  metadata?: {
    metaTitle: string;
    metaDescription: string;
    ogType?: string;
  }
  children: React.ReactNode;
}

export default function Layout({ header, children, metadata }: LayoutProps) {
  const { asPath } = useRouter()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo
        title={metadata.metaTitle}
        description={metadata.metaDescription}
        canonical={`https://example.com${asPath}`}
        openGraph={{
          site_name: 'Angulaire Next Starter',
          type: metadata.ogType,
          url: `https://example.com${asPath}`,
          title: metadata.metaTitle,
          description: metadata.metaDescription,
          images: [
            { url: `https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg` }
          ]
        }}
      />
      {header}
      <main sx={{ mt: '80px', minHeight: '80vh'}}>
        {children}
      </main>
      <Footer />
    </>
  )
}