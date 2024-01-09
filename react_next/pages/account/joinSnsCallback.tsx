import { useRouter } from 'next/router'
import { useEffect } from 'react'


const JoinSnsCallback = () => {
    const router = useRouter()
    const { code, error , provider} = router.query

    useEffect(() => {

        console.log("code ::" + code)
        console.log("provider :: " +provider)

        //백단과 api 통신하여 로그인처리 등

    }, [])

    return <div>sns join Callback 페이지</div>
}

export default JoinSnsCallback