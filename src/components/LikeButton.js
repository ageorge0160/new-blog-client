import React from 'react';
import CountDetail from './CountDetail';
import {connect} from 'react-redux';
import {addLike} from '../actions/actions';

class LikeButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    }
    console.log(this.props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
	let newPost = this.state.post
	newPost.likes += 1
    this.setState({post: newPost}, ()=> {
	  let data = {
    	postId: this.state.post.id,
		post: this.state.post
      }
      this.props.addLike(data)
    })
  }


  render() {
    return (
      <div className='btn'>
          <button onClick={this.handleClick}>Like</button >
          <CountDetail likes={this.props.post.likes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, {addLike})(LikeButton);
