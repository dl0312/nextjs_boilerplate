import { ThemeType } from 'interfaces/theme'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { GlobalStyle } from 'styles/global-styles'
import { themes } from 'styles/theme'
import styled, { ThemeProvider } from 'styles/themed-components'
import useDarkMode from 'use-dark-mode'

import 'node_modules/antd/dist/antd.min.css'
import { useState, useEffect } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

// eslint-disable-next-line @typescript-eslint/naming-convention
function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const body = (
    <ThemeProvider theme={themes[darkMode.value ? ThemeType.DARK : ThemeType.LIGHT]}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )

  return (
    <>
      <GlobalStyle {...themes[darkMode.value ? ThemeType.DARK : ThemeType.LIGHT]} />
      {mounted ? body : <div style={{ visibility: 'hidden' }}>{body}</div>}
    </>
  )
}

export default App
