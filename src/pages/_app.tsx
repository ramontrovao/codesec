import { GlobalStyles } from "@/styles/global";
import { DefaultTheme } from "@/styles/themes/DefaultTheme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon" />
        <title>Codesec</title>
      </Head>

      <ThemeProvider theme={DefaultTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
