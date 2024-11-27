import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';  // 确保路径正确
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
