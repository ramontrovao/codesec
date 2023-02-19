import { GlobalStyles } from "@/styles/global";
import { DefaultTheme } from "@/styles/themes/DefaultTheme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Codesec - Home</title>
      </Head>

      <ThemeProvider theme={DefaultTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
