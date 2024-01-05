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
    /*
    서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트, 페이지에 적용할 공통 레이아웃을 만듦
    localhost/home 접속 시, Component 인자값으로 home 컴포넌트가 들어오게 된다

    로직, 전역 스타일 등 컴포넌트에 공통 데이터를 다룬다
    */
  const getLayout = Component.getLayout ?? ((page) => page)

  return(
      <>
        {getLayout(<Component {...pageProps} />)}
      </>
  )
}
