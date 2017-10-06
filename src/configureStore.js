import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import postReducer from './reducers/postReducer'
import postFormData from './reducers/postFormData'

const reducers = combineReducers([
  postFormData,
  postReducer
])

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)
