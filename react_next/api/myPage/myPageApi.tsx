import {client} from "@/api/client";

class MyPageApi {
    /**
     * ㅇㅇㅇ페이지 :: ㅁㅁㅁ 조회
     */
    test1 = async () => {
        return await client.get('/api/어쩌고주소')
    }

    /**
     * ㅇㅇㅇ페이지 :: ㅁㅁㅁ 조회
     * @param title
     */
    test2 = async (title:string) => {
        return await client.get('/api/어쩌고주소',title)
    }

    /**
     * ㅇㅇㅇ페이지 :: ㅁㅁㅁ 수정
     */
    test3 = async () => {
        return await client.post('/api/어쩌고주소')
    }

    /**
     * ㅇㅇㅇ페이지 :: ㅁㅁㅁ 삭제
     * @param title
     */
    test4 = async (title:string) => {
        return await client.post('/api/어쩌고주소', title)
    }
}

export const myPageApi = new MyPageApi();