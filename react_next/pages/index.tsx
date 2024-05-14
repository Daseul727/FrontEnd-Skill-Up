import {NextPageWithLayout} from "@/pages/_app";
import Layout from "@/components/layout/Layout";
import {useEffect} from "react";

const Home : NextPageWithLayout = () => {

    useEffect(() => {
        console.log("hello")
    },[])



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