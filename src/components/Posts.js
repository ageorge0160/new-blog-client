import React from 'react'
import PostTile from './PostTile'

const Posts = (props) =>
  <div className="PostPage">
    {props.posts.map(post =>
      <div key={post.id}>
        <PostTile post={post} />
      </div>
    )}
    </div>

export default Posts;
