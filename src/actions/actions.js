import fetch from 'isomorphic-fetch';
import Api from '../api/Api'
import {resetPostForm} from './PostForm'

const API_URL = process.env.REACT_APP_API_URL;

export const getPosts = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(posts => this.setState({ posts }))
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
    posts
  }
}

export const ADD_POST = 'ADD_POST'
export const addPost = (data) => {
  return {
    type: 'ADD_POST_SUCCESS',
    post: data
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

export const createPost= (data) => {
  return dispatch => {
        return fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({post: data })
        })
            .then(response => response.json())
            .then(post => {
                dispatch(addPost(post));
                dispatch(resetPostForm());
            })
    };
};
