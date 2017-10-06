import React from 'react';

const PostTile = ({ post }) =>
  <div className="jumbotron">
    <h1 className="title">{post.title}</h1>
    <p className="paragraph">link to come for reading post</p>
  </div>;

export default PostTile;
