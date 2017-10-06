import fetch from 'isomorphic-fetch';
import Api from '../api/Api'
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

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const requestPosts = () => {
  return {type: REQUEST_POSTS}
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts,
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

const createPost= (data) => {
    let headers = Object.assign({}, this.requestHeaders, {
      "Accepts": "application/json",
      "Content-type": "application/json"
    })
    return fetch("/posts.json", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => data.post)
      .catch(err => {
        console.error(err)
        return err
      })

  }
