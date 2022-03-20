/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unknown-property */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import {
  APPLICATION_NAME,
  AUTHOR,
  DESCRIPTION,
  KEYWORDS,
  MAIN_IMAGE_URL,
  OgType,
  SITE_URL,
  TwitterCard,
} from 'public/config'
import { ServerStyleSheet } from 'styled-components'

interface IProps {
  styleTags: React.ReactElement<unknown>[]
}

class AppDocument extends Document<IProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* <!-- Google Adsense --> */}
          <script
            data-ad-client={process.env.NEXT_GOOGKE_ADSENSE_CP}
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            rel="stylesheet"
            as="font"
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || []
            function gtag() {
              dataLayer.push(arguments)
            }
            gtag('js', new Date())

            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}')
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}');
            `,
            }}
          />
          <script type="text/javascript" src="https://wcs.naver.net/wcslog.js" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              if(!wcs_add) var wcs_add = {};
              wcs_add["wa"] = ${process.env.NEXT_NAVER_ANALYTICS_API_KEY};
              if(window.wcs) {
                wcs_do();
              }
            `,
            }}
          />
          {/* <!-- Basic --> */}
          <meta name="application-name" content={APPLICATION_NAME} />
          <meta name="description" content={DESCRIPTION} />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="author" content={AUTHOR} />
          <meta name="keywords" content={KEYWORDS.join(',')} />
          {/* <!-- Schema.org markup for Google+ --> */}
          <meta itemProp="name" content={APPLICATION_NAME} />
          <meta itemProp="description" content={DESCRIPTION} />
          <meta itemProp="image" content={MAIN_IMAGE_URL} />
          {/* <!-- Twitter Card data --> */}
          <meta name="twitter:card" content={MAIN_IMAGE_URL} />
          <meta name="twitter:site" content={SITE_URL} />
          <meta name="twitter:title" content={APPLICATION_NAME} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:card" content={TwitterCard.SUMMARY_LARGE_IMAGE} />
          {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
          <meta name="twitter:image:src" content={MAIN_IMAGE_URL} />
          {/* <!-- Open Graph data --> */}
          <meta property="og:title" content={APPLICATION_NAME} />
          <meta property="og:type" content={OgType.WEBSITE} />
          <meta data-rh="true" property="og:image:width" content="1200" />
          <meta data-rh="true" property="og:image:height" content="630" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:image" content={MAIN_IMAGE_URL} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:site_name" content={APPLICATION_NAME} />
          <meta property="article:section" content="Main" />
          <meta name="naver-site-verification" content="61faa1835dc3ee6d39a9a14ef179cd0001613c6d" />
          <meta property="article:tag" content={KEYWORDS.join(',')} />
          {this.props.styleTags}
        </Head>
        <body>
          <script src="/noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
