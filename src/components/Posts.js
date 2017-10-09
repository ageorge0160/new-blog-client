import React from 'react'
import PostTile from './PostTile'
import {connect} from 'react-redux'
import {getPosts} from '../actions/actions'


class Posts extends React.Component {

  componentDidMount() {
    this.props.getPosts()
  }
  
  render() {
    return (
      <div className="PostPage">
      {this.props.posts.map(post =>
        <div key={post.id}>
        <PostTile post={post} />
        </div>
      )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return (
    {posts: state.posts}
  )
}

export default connect(mapStateToProps, { getPosts })(Posts);
