import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setFilter } from '../../redux/filters/filters.actions'

const Bold = styled.p`
  font-weight: 700;
  line-height: 40px;
  font-size: 15px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#11BEFF' : '#000')};
`

const Regular = styled.p`
  line-height: 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#11BEFF' : '#000')};
`

const CategoryItem = ({ selected, setSelected, data: { title, slug } }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setFilter(slug))
  }

  return slug === 'show-all' ? (
    <Bold selected={selected} onClick={handleClick}>
      {title}
    </Bold>
  ) : (
    <Regular selected={selected} onClick={handleClick}>
      {title}
    </Regular>
  )
}

export default CategoryItem
