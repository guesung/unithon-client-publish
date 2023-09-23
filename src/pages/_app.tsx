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
        <title>저기요</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="저기요" />
        <meta property="og:title" content="저기요" />
        <meta name="twitter:title" content="저기요" />
        <meta property="og:description" content="해커톤 네트워킹의 정석" />
        <meta name="twitter:description" content="해커톤 네트워킹의 정석" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/50096419/270124408-fe7c7155-76ca-4e77-b285-e078744abd37.png"
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/50096419/270124408-fe7c7155-76ca-4e77-b285-e078744abd37.png"
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
