import React from 'react';
import CountDetail from './CountDetail';
import {connect} from 'react-redux'
import {modifyPost} from '../actions/actions'

class LikeButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    }
    console.log('state' + this.props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (id, likes, value) => {
    this.props.modifyPost(id, likes, value)
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


export default connect(mapStateToProps, {modifyPost})(LikeButton);













// <ButtonDetail click={this.handleClick} />
// <CountDetail likes={this.props.likes} />
