import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../redux/categories/categories.actions'
import { fetchMockups } from '../redux/mockups/mockups.actions'

const useLoadInitialData = () => {
  const dispatch = useDispatch()
  const [categories, mockups] = useSelector(
    ({ categories, mockups }) => [categories, mockups],
    shallowEqual
  )
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchMockups())
  }, [dispatch])

  return [
    categories.loading || mockups.loading,
    mockups.error || categories.loading,
  ]
}

export default useLoadInitialData
