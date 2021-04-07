import {
  FETCH_CATEGORIES_DONE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_ERROR,
} from './categories.types'

const initialState = {
  loading: false,
  error: false,
  data: [],
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_START: {
      return { ...state, loading: true }
    }
    case FETCH_CATEGORIES_DONE: {
      return { ...state, loading: false, data: action.payload }
    }
    case FETCH_CATEGORIES_ERROR: {
      return { ...state, loading: false, error: true }
    }
    default:
      return state
  }
}

export default categoriesReducer
