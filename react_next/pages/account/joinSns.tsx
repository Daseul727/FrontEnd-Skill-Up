import { NextPageWithLayout } from '@/pages/_app'
import {JoinGoogle} from "@/components/accout/sns/JoinGoogle";
import Layout from "@/components/layout/Layout";
import {JoinKakao} from "@/components/accout/sns/JoinKakao";
import {JoinNaver} from "@/components/accout/sns/JoinNaver";

const JoinSns:NextPageWithLayout = () => {

    return (
        <>
            <div>
                <p>sns 가입하기</p>
                <JoinGoogle/>
                <JoinKakao/>
                <JoinNaver/>
            </div>
        </>
    )
}

JoinSns.getLayout = function getLayout(page){
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default JoinSns