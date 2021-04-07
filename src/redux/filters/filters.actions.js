import { SET_FILTER } from './filters.types'

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
})
