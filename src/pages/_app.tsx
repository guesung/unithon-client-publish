import GlobalStyle from "@/styles/globalStyles";
import type { AppProps } from "next/app";
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
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <GlobalStyle />
      </QueryClientProvider>
    </>
  );
}
