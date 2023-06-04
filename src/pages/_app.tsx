import "@/styles/globals.css";
import { errorReporter } from "@/utils/sentryUtils";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ onError: errorReporter }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
