import { useState, useEffect } from 'react'

import { ThemeType } from 'interfaces/theme'
import Head from 'next/head'
import { applicationName } from 'public/config'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { GlobalStyle } from 'styles/global-styles'
import { styledVariables } from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

import 'public/antd.min.css'
import { AppProps } from 'next/dist/shared/lib/router/router'

function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false)
  const theme = styledVariables(darkMode)

  /** For SSR mismatch */
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const themeMap = {
    [ThemeType.LIGHT]: '/antd.min.css',
    [ThemeType.DARK]: '/antd.dark.css',
  }

  const body = (
    <ThemeProvider theme={theme}>
      <ThemeSwitcherProvider defaultTheme={darkMode.value ? ThemeType.DARK : ThemeType.LIGHT} themeMap={themeMap}>
        <Component {...pageProps} />
      </ThemeSwitcherProvider>
    </ThemeProvider>
  )

  return (
    <>
      <Head>
        <title>{applicationName}</title>
      </Head>
      <GlobalStyle {...theme} />
      {mounted ? body : <div style={{ visibility: 'hidden' }}>{body}</div>}
    </>
  )
}

export default App
