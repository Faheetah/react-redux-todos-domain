import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import todos from './todo/reducers'
import app from './app/reducers'

import error from './middleware/error'

const rootReducer = combineReducers({
  app,
  todos,
})

const middleware = {
  error
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
