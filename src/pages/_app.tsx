import GlobalStyle from "@/styles/globalStyles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <title>개미는 툰툰</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="개미는 툰툰" />
        <meta property="og:title" content="개미는 툰툰" />
        <meta name="twitter:title" content="개미는 툰툰" />
        <meta property="og:description" content="웹툰의 새로운 덕질 문화" />
        <meta name="twitter:description" content="웹툰의 새로운 덕질 문화" />
        <meta
          property="og:image"
          content="https://camo.githubusercontent.com/d9f6f82f2ccdd9692d7d2b275a0d35fcd9aba3fefb52777bc0a88baaea670fed/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e253246466137384f253246627472436a32556f56424f2532465a55486b366b6a4e4146516f613670614f3341476c31253246696d672e706e67"
        />
        <meta
          name="twitter:image"
          content="https://camo.githubusercontent.com/d9f6f82f2ccdd9692d7d2b275a0d35fcd9aba3fefb52777bc0a88baaea670fed/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e253246466137384f253246627472436a32556f56424f2532465a55486b366b6a4e4146516f613670614f3341476c31253246696d672e706e67"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <GlobalStyle />
        </QueryClientProvider>
    </>
  );
}
