import Spinner from '../components/shared/Spinner'
import useLoadInitialData from '../hooks/useLoadInitialData'
import Categories from './header/Categories'
import Error from './shared/Error'
import styled from 'styled-components'
import Mockups from './items/Mockups'

const Container = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  @media (max-width: 550px) {
    padding-top: 25px;
  }
`

const App = () => {
  const [loading, error] = useLoadInitialData()

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Error />
  }

  return (
    <Container>
      <Categories />
      <Mockups />
    </Container>
  )
}

export default App
