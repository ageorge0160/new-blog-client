import fetch from 'isomorphic-fetch';
import Api from './Api'

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

export const ADD_POST = 'ADD_POST'
export const addPost = (data) => {
  return {
    type: ADD_POST,
    data
  }
}

export const loadPosts = () => {
  return (dispatch) => {
    dispatch(requestPosts())
    return Api.getAllPosts()
    .then(posts => {
      dispatch(receivePosts(posts))
    })
    .catch(error => {
      console.log(error)
      throw(error)
    })
  }
}

export const createPost = (data) => {
  return (dispatch) => {
    dispatch(addPost(data))
    return Api.createPost(data)
      .then(post => {
        console.log("Created: ", post)
        dispatch(loadPosts())
      })
  }
}
