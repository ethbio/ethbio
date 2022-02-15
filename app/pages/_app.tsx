import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz";
import Head from "next/head"
import { ChakraProvider } from '@chakra-ui/react';

import "app/core/styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Head>
      <meta name="og:description" content="A one-page personal bio, powered by web 3.0 technology." />
      <meta name="og:url" content="https://ethbio.xyz" />
      <meta name="og:image" content="https://media.discordapp.net/attachments/930160554243395604/943157909548834826/Untitled_design.png?width=477&height=477"/>
      <meta name="og:site_name" content="Ethbio"/>
      <meta name="og:title" content="Coming Soon"/>     
   </Head>
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <ChakraProvider>
      {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
