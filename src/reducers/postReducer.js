
export default function postReducer(
  state={
    loading:false,
    posts:[]
  },action){
  switch (action.type){
    case 'REQUEST_POSTS':
    debugger
      return Object.assign({}, state, {loading:true})
    case 'RECEIVE_POSTS':
        return Object.assign({},state,{loading: false, posts: action.payload })
    default:
      return state;
  }
}
