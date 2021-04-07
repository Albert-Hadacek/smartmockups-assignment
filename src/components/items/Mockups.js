import React from 'react'
import styled from 'styled-components'
import useFilterMockups from '../../hooks/useFilterMockups'
import MockupItem from './MockupItem'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-gap: 20px;
  grid-column-gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Mockups = () => {
  const mockups = useFilterMockups()
  return (
    <Grid>
      {mockups.map((m) => (
        <MockupItem key={m.id} data={m} />
      ))}
    </Grid>
  )
}

export default Mockups
