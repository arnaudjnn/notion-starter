import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import { MediaContextProvider } from 'components/layout/Media';
import 'focus-visible/dist/focus-visible';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import theme from 'theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <MediaContextProvider>
        <Component {...pageProps} />
      </MediaContextProvider>
    </ChakraProvider>
  )
}