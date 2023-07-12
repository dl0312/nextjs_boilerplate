import { config } from '@fortawesome/fontawesome-svg-core'
import { ConfigProvider } from 'antd'
import koKR from 'antd/lib/locale/ko_KR'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { APPLICATION_NAME } from '@/constants/config'

import '@/styles/globals.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APPLICATION_NAME}</title>
      </Head>
      <ConfigProvider locale={koKR}>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  )
}

export default App
