import React from 'react'

const Posts = (props) => {
  <div className="postContainer">
    <h1>Posts</h1>
    {props.posts.map(post =>
      <div key={post.id} className="postBox">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    )}
  </div>
};
export default Posts;
