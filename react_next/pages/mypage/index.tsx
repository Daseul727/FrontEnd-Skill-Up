import {NextPageWithLayout} from "@/pages/_app";
import Layout from "@/components/layout/Layout";
import {useEffect, useState} from "react";
import {myPageApi} from "@/api/myPage/myPageApi";
import exp from "constants";

export interface itemListProps {
    id: string
    title: string
}

const MyPage: NextPageWithLayout = () => {

    //기본적인 변수 선언법
    const [nickname, setNickname] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [itemList, setItemList] = useState<itemListProps[]>([])

    useEffect(() => {
      myPageApi.test4('test')
          .then((response:itemListProps) => {
              console.log(response)
          })
          .catch((error) => {
              console.log(error)
          })
    },[])

    return(
        <div> mypage </div>
    )
}

MyPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default MyPage