import React, { ReactElement } from 'react'

import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styles/themed-components'

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem 0 1.5rem;
`
// const Advertisement = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin: 1rem 0;
// `

const PoweredBy = styled.div`
  align-self: center;
  margin: 1rem;
`

function Footer(): ReactElement {
  return (
    <Container>
      <PoweredBy>
        <FontAwesomeIcon icon={faBolt} style={{ marginRight: '0.5rem' }} />
        Powered by Quakka
      </PoweredBy>
    </Container>
  )
}

export default Footer
