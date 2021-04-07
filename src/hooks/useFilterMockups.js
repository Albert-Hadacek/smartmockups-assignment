import { useSelector } from 'react-redux'

const useFilterMockups = () => {
  const [mockups, filter] = useSelector(({ mockups, filter }) => [
    mockups,
    filter,
  ])

  if (filter === 'show-all') {
    return mockups.data
  }

  return mockups.data.filter((m) => m.category.includes(filter))
}

export default useFilterMockups
