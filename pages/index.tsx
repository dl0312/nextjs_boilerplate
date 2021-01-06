import Layout from 'components/Layout'
import ThemeToggleSwitch from 'components/ThemeToggleSwitch'
import { applicationName, description } from 'public/config'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1.5rem;
  width: 100%;
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1``

const Description = styled.p``

function Home() {
  return (
    <Layout>
      <Header>
        <HeaderTop>
          <HeaderTopLeft>
            <Title>{applicationName}</Title>
            <Description>{description}</Description>
          </HeaderTopLeft>
        </HeaderTop>
        <ThemeToggleSwitch />
      </Header>
    </Layout>
  )
}

export default Home
