import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
            width: 100%;
            height: 100vh;
            width: 100vw;
            margin: 0;
          }
        `}
      />
    </Component>
  );
}

export default MyApp;
