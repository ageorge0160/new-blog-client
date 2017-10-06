import { combineReducers } from 'redux'
import {fetchPosts} from '../actions/actions'

export default combineReducers({
  posts: fetchPosts
});
