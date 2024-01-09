import {useRouter} from "next/router";

import GoogleSignIn from '@/assets/googleIcon.svg'

export const JoinGoogle = () => {

    const router = useRouter()
    const googleURL = process.env.NEXT_PUBLIC_GOOGLE_API +
        '?client_id=' + process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID +
        '&redirect_uri=' + process.env.NEXT_PUBLIC_GOOGLE_CALL_BACK_URL +
        '&response_type=code' +
        '&scope=' + process.env.NEXT_PUBLIC_GOOGLE_API_SCOPE

    function socialLoginGoogle() {
        router.push(googleURL)
    }

    return (
        <>
            <button onClick={socialLoginGoogle}>
                <GoogleSignIn />
                구글로 가입하기
            </button>
        </>
    )

}
