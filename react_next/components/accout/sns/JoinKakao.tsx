import {useRouter} from "next/router";

import KakaoSignIn from '@/assets/kakaoIcon.svg'

export const JoinKakao = () => {

    const router = useRouter()
    const kakaoURL = process.env.NEXT_PUBLIC_KAKAO_API +
        '?client_id=' + process.env.NEXT_PUBLIC_KAKAO_API_KEY +
        '&redirect_uri=' + process.env.NEXT_PUBLIC_KAKAO_CALL_BACK_URL +
        '&response_type=code'

    function socialLoginKakao() {
        router.push(kakaoURL)
    }

    return (
        <>
            <button onClick={socialLoginKakao}>
                <KakaoSignIn />
                카카오톡으로 가입하기
            </button>
        </>
    )

}
