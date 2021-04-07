import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = () => (
  <Container>
    <Loader type="TailSpin" color="#00BFFF" height={120} width={120} />
  </Container>
)

export default Spinner
