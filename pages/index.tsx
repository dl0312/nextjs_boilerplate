import Footer from 'components/Footer'
import Layout from 'components/Layout'

import { applicationName, description } from 'public/config'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const ThemeToggleSwitch = dynamic(() => import('components/ThemeToggleSwitch'))

const Header = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-cetween;
  width: 100%;
  color: ${({
    theme: {
      color: { primaryText },
    },
  }) => primaryText};
  background: ${({
    theme: {
      color: { mainBackground },
    },
  }) => mainBackground};
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

const Description = styled.p`
  margin-bottom: 0.5rem;
`

const Main = styled.main`
  width: 100%;
  padding: 1rem;
`

const Img = styled.img`
  width: 100%;
`

function Home() {
  const quakka = {
    name: 'quakka',
    image: {
      src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrPjDC%2FbtqBdTykrlc%2FRFFN4LM7AVKPbJyiddqeaK%2Fimg.jpg',
    },
  }
  return (
    <Layout>
      <Header>
        <HeaderTop>
          <Title>{applicationName}</Title>
          <ThemeToggleSwitch />
        </HeaderTop>
      </Header>
      <Main>
        <Description>{description}</Description>
        <Img src={quakka.image.src} alt={quakka.name} />
      </Main>
      <Footer />
    </Layout>
  )
}

export default Home
