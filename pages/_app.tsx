import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layouts/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Layout>
    </>
  );
}

export default MyApp;
