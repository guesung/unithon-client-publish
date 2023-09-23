import GlobalStyle from "@/styles/globalStyles";
import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledComponentsRegistry>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <GlobalStyle />
        </QueryClientProvider>
      </StyledComponentsRegistry>
    </>
  );
}
