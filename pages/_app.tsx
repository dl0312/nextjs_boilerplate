import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
