import { CATEGORIES_API } from '../../consts/urls'
import {
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_DONE,
} from './categories.types'

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CATEGORIES_START })
    let response = await fetch(CATEGORIES_API)
    let data = await response.json()

    dispatch({
      type: FETCH_CATEGORIES_DONE,
      payload: data,
    })
  } catch (e) {
    console.log(e)
    dispatch({ type: FETCH_CATEGORIES_ERROR })
  }
}
