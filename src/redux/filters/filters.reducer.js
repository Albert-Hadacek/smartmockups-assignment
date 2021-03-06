import { SET_FILTER } from './filters.types'

const initialState = 'show-all'

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload
    default:
      return state
  }
}

export default filtersReducer
