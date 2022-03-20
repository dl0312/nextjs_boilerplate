import React, { ReactElement, ReactNode } from 'react'

import { APPLICATION_NAME } from 'public/config'
import styled from 'styled-components'

import Footer from './Footer'

const Header = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-cetween;
  width: 100%;
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

const PageWrapper = styled.div`
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.main`
  width: 100%;
  padding: 1rem;
`

interface Props {
  children: ReactNode
}

function Layout({ children }: Props): ReactElement {
  return (
    <LayoutContainer>
      <PageWrapper>
        <Header>
          <HeaderTop>
            <Title>{APPLICATION_NAME}</Title>
          </HeaderTop>
        </Header>
        <Main>{children}</Main>
        <Footer />
      </PageWrapper>
    </LayoutContainer>
  )
}

export default Layout
