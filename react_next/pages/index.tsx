import { Inter } from 'next/font/google'
import {NextPageWithLayout} from "@/pages/_app";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ['latin'] })

const Home : NextPageWithLayout = () => {
  return (
    <>
      <h1>본문 영역입니다</h1>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return<Layout>{page}</Layout>
}

export default Home