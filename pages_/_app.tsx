import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import { MediaContextProvider } from 'components/layout/Media';
import 'focus-visible/dist/focus-visible';
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