import {
  FETCH_MOCKUPS_DONE,
  FETCH_MOCKUPS_ERROR,
  FETCH_MOCKUPS_START,
} from './mockups.types'

const initialState = {
  data: [],
  loading: false,
  error: false,
}

const mockupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOCKUPS_START: {
      return { ...state, loading: true }
    }
    case FETCH_MOCKUPS_DONE: {
      return { ...state, loading: false, data: action.payload }
    }
    case FETCH_MOCKUPS_ERROR: {
      return { ...state, loading: false, error: true }
    }
    default:
      return state
  }
}

export default mockupsReducer
