import { useSelector } from 'react-redux'
import styled from 'styled-components'
import useFilterCategories from '../../hooks/useFilterCategories'
import splitArray from '../../utils/splitArray'
import CategoryItem from './CategoryItem'

const FlexGrid = styled.div`
  display: flex;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin-bottom: 30px;
  @media (max-width: 550px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Column = styled.div`
  flex: 1;
  margin-left: 60px;
  @media (max-width: 1200px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 550px) {
    flex: 0 1 calc(50% - 20px);
  }
`

const Divider = styled.div`
  margin: 25px 0;
  border-right: ${({ setBoarder }) =>
    setBoarder ? '1px solid #e1e1e1' : 'none'};
  @media (max-width: 550px) {
    border-right: none;
    margin: 0;
  }
`

const Categories = () => {
  const filter = useSelector(({ filter }) => filter)
  const categories = useFilterCategories()

  return (
    <FlexGrid>
      {splitArray(categories, 3).map((chunk, i, categories) => (
        <Column key={i}>
          <Divider setBoarder={i < categories.length - 1}>
            {chunk.map((c, i) => (
              <CategoryItem key={i} data={c} selected={c.slug === filter} />
            ))}
          </Divider>
        </Column>
      ))}
    </FlexGrid>
  )
}

export default Categories
