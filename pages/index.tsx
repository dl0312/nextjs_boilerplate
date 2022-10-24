import Image from 'next/image'

import { DESCRIPTION } from '@/config'

import Layout from 'components/Layout'

function HomePage() {
  const quakka = {
    name: 'quakka',
    image: {
      src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrPjDC%2FbtqBdTykrlc%2FRFFN4LM7AVKPbJyiddqeaK%2Fimg.jpg',
    },
  }
  return (
    <Layout>
      <p className="pb-2">{DESCRIPTION}</p>
      <Image src={quakka.image.src} alt={quakka.name} width="300" height="300" />
    </Layout>
  )
}

export default HomePage
