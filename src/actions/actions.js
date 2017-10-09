import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function modifyPost(posts, postId, updatePostCallback) {
const updatedPosts = posts.map(post => {
  if (post.id !== postId){
    return post;
  }
  const updatedPost = updatePostCallback(post)
  return updatedPost;
})
return updatedPosts
}


export const createPost= (data, history) => {
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
      history.push('/posts')
    })
  };
};


export const getPosts = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(posts => dispatch({
      type: 'FETCH_POSTS_COMPLETE',
      payload: posts
    })
  )}
}

export const addPost = (data) => {
  return {
    type: 'ADD_POST_SUCCESS',
    post: data
  }
}
