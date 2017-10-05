import React from 'react'


const Posts = ({posts}) => {
  const renderPosts = posts.map((post) =>
  <h6>{post.title}</h6>
)

return (
  <div>
    <h1>Posts</h1>
    {renderPosts}
  </div>
)
}
export default Posts;
