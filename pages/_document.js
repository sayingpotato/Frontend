import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const kakaoAPI = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services,clusterer&autoload=false`
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Script src={kakaoAPI} strategy="beforeInteractive" />
      </body>
    </Html>
  )
}
