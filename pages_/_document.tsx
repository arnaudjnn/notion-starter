import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import documentLang from 'next-translate/documentLang'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={documentLang(this.props)}>
        <Head>
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"/>
          <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument