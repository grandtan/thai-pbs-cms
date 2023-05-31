import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';
import theme from 'theme/theme';

import 'styles/Fonts.css';
import 'styles/App.css';
import 'styles/Contact.css';

import 'react-calendar/dist/Calendar.css';
import 'styles/MiniCalendar.css';
import Head from 'next/head';
import { MyContextProvider } from 'contexts/MyContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Thai PBS CMS</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
      </Head>

      <React.StrictMode>
        <MyContextProvider>
          <Component {...pageProps} />
        </MyContextProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default MyApp;
