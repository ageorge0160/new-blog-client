import React from 'react';

const PostTile = ({ post }) =>
  <div id={post.id} className="jumbotron">
    <h1 className="title">{post.title}</h1>
    <p className="paragraph">{post.content}</p>
  </div>

export default PostTile;
