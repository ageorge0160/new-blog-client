export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS_COMPLETE':
        console.log(action)
        return action.payload;
      case 'MODIFY_POST':
        return Object.assign({}, state, {
          posts: state.posts.map(post => {
            if (post.id !== action.id) {
              return post;
            }
            return Object.assign({}, post, {
              likes: action.likes
            })
          })
        });
      default:
          return state;
    }
}
