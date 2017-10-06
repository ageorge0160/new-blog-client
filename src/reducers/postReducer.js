const initialState = {
  loading: false,
  posts: []
}

export default (state= initialState, action) => {
  switch (action.type){
    case 'ADD_POST':
      return{
        post: state.post.concat(action.post)
      }
    default:
      return state;
  }
}
