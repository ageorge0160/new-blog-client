export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS_COMPLETE':
        console.log(action)
        return action.payload;
      case 'ADD_LIKE_SUCCESS':
        return Object.assign({}, state, {likes: state.likes + 1})
      default:
          return state;
    }
}
