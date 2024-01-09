import {useRouter} from "next/router";

import NaverSignIn from '@/assets/naverIcon.svg'

export const JoinNaver = () => {

    const router = useRouter()
    const naverURL = process.env.NEXT_PUBLIC_NAVER_API +
        '?response_type=code' +
        '&client_id=' + process.env.NEXT_PUBLIC_NAVER_CLIENT_ID +
        '&redirect_uri=' + process.env.NEXT_PUBLIC_NAVER_CALL_BACK_URL

    function socialLoginNaver() {
        router.push(naverURL)
    }

    return (
        <>
            <button onClick={socialLoginNaver}>
                <NaverSignIn />
                카카오톡으로 가입하기
            </button>
        </>
    )

}
