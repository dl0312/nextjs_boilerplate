import { ConfigProvider } from 'antd'
import koKR from 'antd/lib/locale/ko_KR'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { APPLICATION_NAME } from 'public/config'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global-styles'
import { theme } from 'styles/theme'

import 'antd/dist/antd.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APPLICATION_NAME}</title>
      </Head>
      <GlobalStyle {...theme} />
      <ConfigProvider locale={koKR}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ConfigProvider>
    </>
  )
}

export default App
