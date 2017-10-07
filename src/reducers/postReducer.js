export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS_COMPLETE':
        console.log(action)
        return action.payload;
      default:
          return state;
    }
}
