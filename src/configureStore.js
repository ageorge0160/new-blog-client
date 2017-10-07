import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import postFormData from './reducers/postFormData'
import postReducer from './reducers/postReducer'
const reducers = combineReducers({
  postFormData,
  posts: postReducer
})

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)
