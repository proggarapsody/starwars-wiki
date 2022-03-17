import { ThemeProvider } from 'next-themes';
import React from 'react';
import MainPage from '.';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ThemeProvider enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
