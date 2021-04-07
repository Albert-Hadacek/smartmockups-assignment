import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Warning = styled.h1`
  color: tomato;
`

const Error = () => (
  <Container>
    <Warning>Something went wrong... Try to refresh the page</Warning>
  </Container>
)

export default Error
