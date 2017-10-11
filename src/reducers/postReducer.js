import {returnLike} from '../actions/actions';

export default function(state = [], action) {
    switch (action.type) {
      case 'FETCH_POSTS_COMPLETE':
        console.log(action)
        return action.payload;
      case 'ADD_LIKE_SUCCESS':
        return state.map(post =>{
          return post.id === action.payload.id ?
            {...post, likes: action.payload.likes } :
            post
        })

      default:
          return state;
    }
}
