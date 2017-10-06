import { combineReducers } from 'redux'
import {fetchPosts} from '../action/actions'

export default combineReducers({
  posts: fetchPosts
});
