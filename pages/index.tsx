import ThemeToggleSwitch from 'components/ThemeToggleSwitch'
import styled from 'styles/themed-components'

const Title = styled.div`
  color: ${({ theme: { linkText } }) => linkText};
`

function Home() {
  return (
    <div>
      <Title>타이틀</Title>
      <ThemeToggleSwitch />
    </div>
  )
}

export default Home
