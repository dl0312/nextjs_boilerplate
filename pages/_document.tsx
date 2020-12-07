import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/**
           * Web Fonts from Google Fonts
           * * 배달의민족 도현 - https://fonts.google.com/specimen/Do+Hyeon
           * * 송명 - https://fonts.google.com/specimen/Song+Myung
           * * 나눔 고딕 - https://fonts.google.com/specimen/Nanum+Gothic
           * * 나눔 명조 - https://fonts.google.com/specimen/Nanum+Myeongjo
           * * 나눔손글씨 펜 - https://fonts.google.com/specimen/Nanum+Pen+Script
           * * 검은고딕 - https://fonts.google.com/specimen/Black+Han+Sans
           * Use the following CSS rules to specify these families: font-family: 'Black Han Sans', sans-serif;
           * */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
          />
          {/**
           * metadata
           * * viewport
           * * theme-color
           */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          {/**
           * title
           */}
          <title>React-TypeScript-Boilerplate</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
