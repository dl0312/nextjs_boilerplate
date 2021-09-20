import React, { ReactElement, ReactNode } from 'react'

import styled from 'styled-components'

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

interface Props {
  children: ReactNode
}

function Layout({ children }: Props): ReactElement {
  return (
    <LayoutContainer>
      <PageWrapper>{children}</PageWrapper>
    </LayoutContainer>
  )
}

export default Layout
