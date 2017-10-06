import fetch from 'isomorphic-fetch';
import {resetPostForm} from './PostForm'

const API_URL = process.env.REACT_APP_API_URL;

export const getPosts = () => {
  debugger
  return (dispatch) => {
    return fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(posts => this.setState({ posts }))
  }
}

export const ADD_POST = 'ADD_POST'
export const addPost = (data) => {
  return {
    type: 'ADD_POST_SUCCESS',
    post: data
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
