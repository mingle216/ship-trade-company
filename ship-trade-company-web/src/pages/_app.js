import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
import nextI18NextConfig from '../../next-i18next.config.js';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18NextConfig);

