import {NextPageWithLayout} from "@/pages/_app";
import Layout from "@/components/layout/Layout";
import {useState} from "react";
import {itemListProps} from "@/pages/mypage/index";

const MyOrder: NextPageWithLayout = () => {

    //다른 페이지의 interface type 을 import 할수있다
    const [itemList, setItemList] = useState<itemListProps[]>([])

    const itemInfo = [
        {
            category: '글',
            title: '정유정',
        },
        {
            category: '그림',
            title: '이리도 노래하였던 것인가 이리도 노래하였던 것인가',
        },
        {
            category: '그림',
            title: '사랑하니까 견딜 수 있어',
        },
        {
            category: '그림',
            title: '아몬드',
        },
    ]

    return(
        <>
            <h1>mypage</h1>
            {
                itemInfo.map((item: any, index: number) => (
                    <div key={index}>
                        <h3>{item.category}</h3>
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </>
    )
}

MyOrder.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default MyOrder