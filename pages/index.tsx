import Footer from 'components/Footer'
import Layout from 'components/Layout'
import ThemeToggleSwitch from 'components/ThemeToggleSwitch'
import { applicationName, description } from 'public/config'
import styled from 'styled-components'

const Header = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-top: 1.5rem;
  background: ${({ theme: { mainBackground } }) => mainBackground};
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`

const HeaderTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1``

const Description = styled.p``

const Main = styled.main`
  width: 100%;
  margin: 1rem 0;
`

function Home() {
  return (
    <Layout>
      <Header>
        <HeaderTop>
          <HeaderTopLeft>
            <Title>{applicationName}</Title>
            <Description>{description}</Description>
          </HeaderTopLeft>
          <ThemeToggleSwitch />
        </HeaderTop>
      </Header>
      <Main>Main Contents</Main>
      <Footer />
    </Layout>
  )
}

export default Home
