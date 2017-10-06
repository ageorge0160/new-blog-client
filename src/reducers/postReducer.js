const initialState = {
  loading: false,
  posts: []
}

export default class postReducer(state= initialState, action) => {
  switch (action.type){
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {loading:true})
    case 'RECEIVE_POSTS':
        return Object.assign({},state,{loading: false, posts: action.payload })
    default:
      return state;
  }
}
