import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import categoriesReducer from './categories/categories.reducer'
import filtersReducer from './filters/filters.reducer'
import mockupsReducer from './mockups/mockups.reducer'

const reducers = combineReducers({
  filter: filtersReducer,
  categories: categoriesReducer,
  mockups: mockupsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
