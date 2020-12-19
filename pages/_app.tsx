import { ThemeType } from 'interfaces/theme'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { GlobalStyle } from 'styles/global-styles'
import { themes } from 'styles/theme'
import { ThemeProvider } from 'styles/themed-components'
import useDarkMode from 'use-dark-mode'

// eslint-disable-next-line @typescript-eslint/naming-convention
function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false)

  return (
    <>
      <GlobalStyle {...themes[darkMode.value ? ThemeType.DARK : ThemeType.LIGHT]} />
      <ThemeProvider theme={themes[darkMode.value ? ThemeType.DARK : ThemeType.LIGHT]}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
