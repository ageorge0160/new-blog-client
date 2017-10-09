export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS_COMPLETE':
        console.log(action)
        return action.payload;
      case 'ADD_LIKE':
        const updatePosts = state.map(post => {
          if(post.id === action.id){
            return {...post, ...action.payload}
          }
          return post
        })
        return updatePosts
      case 'ADD_LIKE_SUCCESS':
        return Object.assign({}, state, {likes: state.likes + 1})
      default:
          return state;
    }
}
