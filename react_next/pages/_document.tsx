import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    /*
    _app 다음 실행되며 공통적으로 사용할 head, 메타태그, body 를 커스텀

    주요 사용목적
    1. import font
    2. char-set, 웹 접근성 관련 태그 설정

    공통적으로 적용할 HTML 마크업을 중심으로 다룬다
    */

  return (
    <Html lang="en">
        <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
