import { MOCKUPS_API } from '../../consts/urls'
import {
  FETCH_MOCKUPS_ERROR,
  FETCH_MOCKUPS_START,
  FETCH_MOCKUPS_DONE,
} from './mockups.types'

export const fetchMockups = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOCKUPS_START })
    let response = await fetch(MOCKUPS_API)
    let data = await response.json()

    dispatch({
      type: FETCH_MOCKUPS_DONE,
      payload: data,
    })
  } catch (e) {
    console.log(e)
    dispatch({ type: FETCH_MOCKUPS_ERROR })
  }
}
