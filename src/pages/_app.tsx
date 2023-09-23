import GlobalStyle from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledComponentsRegistry>
        <Component {...pageProps} />
        <GlobalStyle />
      </StyledComponentsRegistry>
    </>
  );
}
