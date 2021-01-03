import ThemeToggleSwitch from 'components/ThemeToggleSwitch'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  margin: 1rem;
`

function Home() {
  return (
    <>
      <Title>Next.js Boilerplate</Title>
      <ThemeToggleSwitch />
    </>
  )
}

export default Home
