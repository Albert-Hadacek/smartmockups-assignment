import React from 'react'
import styled from 'styled-components'

const GridItem = styled.div`
  cursor: pointer;
  position: relative;
  transition: background-color 0.7s;
  border-radius: 4px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #11beff;
    background-color: black;
  }
  &:hover img {
    opacity: 0.6;
    filter: blur(1px);
  }
  &:hover p {
    opacity: 1;
  }
`

const Caption = styled.p`
  transition: opacity 0.7s;
  opacity: 0;
  position: absolute;
  color: white;
  left: 13px;
  line-height: 25px;
  bottom: 4px;
`
const Image = styled.img`
  transition: 0.7s;
  border-radius: 4px;
  width: 100%;
  height: 100%;
`

const MockupItem = ({ data: { title, thumb } }) => {
  return (
    <GridItem img={thumb}>
      <Image src={thumb} alt={title} />
      <Caption>{title}</Caption>
    </GridItem>
  )
}

export default MockupItem
