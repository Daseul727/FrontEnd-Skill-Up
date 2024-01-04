import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return(
      <>
        <Head>
          <title>사이트명 : 타이틀입니다</title>
          <meta name='viewport' content='initial-scale=1, maximum-scale=1, width=device-width' />
          <meta property='og:type' content='website' />
          <meta name='description' content='사이트 설명입니다' />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </>
  )
}
