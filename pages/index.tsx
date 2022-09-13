import styled from 'styled-components'

import Layout from 'components/Layout'
import { DESCRIPTION } from 'public/config'

const Description = styled.p`
  margin-bottom: 0.5rem;
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
      <Description>{DESCRIPTION}</Description>
      <img src={quakka.image.src} alt={quakka.name} width="300" height="300" />
    </Layout>
  )
}

export default Home
