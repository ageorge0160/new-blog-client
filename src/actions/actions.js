import fetch from 'isomorphic-fetch';


export const fetchPosts = () => {
  // debugger
  return (dispatch) => {
    dispatch({type: 'REQUEST_POSTS'});
  return fetch('http://localhost:3001/posts.json')
  .then(response => { console.log(response)
    return response.json()
  }).then(responseJson => {
    dispatch({type: 'RECEIVE_POSTS', payload: responseJson.posts})
  })
  }
}
