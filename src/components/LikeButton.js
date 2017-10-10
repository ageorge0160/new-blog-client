import React from 'react';
import CountDetail from './CountDetail';
import ButtonDetail from './ButtonDetail';
import {connect} from 'react-redux';
import {addLike} from '../actions/actions';

class LikeButton extends React.Component{

  handleClick() {
	let newPost = this.props.post
	newPost.likes += 1
    this.setState({post: newPost}, ()=> {
	  let data = {
    	postId: this.props.post.id,
		post: this.props.post
      }
      this.props.addLike(data)
    })
  }


  render() {
    return (
      <div className='btn'>
          <ButtonDetail click={this.handleClick.bind(this)} />
          <CountDetail likes={this.props.post.likes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, {addLike})(LikeButton);
