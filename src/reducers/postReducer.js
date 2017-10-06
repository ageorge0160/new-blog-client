const initialState = {
  loading: false,
  posts: []
}

export default (state= initialState, action) => {
  switch (action.type){
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {loading:true})
    case 'RECEIVE_POSTS':
        return Object.assign({},state,{loading: false, posts: action.payload })
    case 'ADD_POST': {
      return state.concat(action.post)
    }
    default:
      return state;
  }
}
