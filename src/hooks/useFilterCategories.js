import { useSelector, shallowEqual } from 'react-redux'
import deepFlatten from '../utils/deepFlatten'
import removeDuplicatesByProperty from '../utils/removeDuplicatesByProperty'

const useFilterCategories = () => {
  const [mockups, categories] = useSelector(
    ({ mockups, categories }) => [mockups, categories],
    shallowEqual
  )

  const categoriesFromMockups = mockups.data.reduce(
    (acc, curr) => [...acc, ...curr.category],
    []
  )
  const uniqueCategoriesFromMockups = [...new Set(categoriesFromMockups)]

  const allCategories = deepFlatten(categories.data)

  const allUniqueCategories = removeDuplicatesByProperty(allCategories, 'title')

  const usedCategories = allUniqueCategories.filter((c) =>
    uniqueCategoriesFromMockups.includes(c.slug)
  )

  return [{ title: 'Show all', slug: 'show-all' }, ...usedCategories]
}

export default useFilterCategories
