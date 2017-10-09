import React from 'react';
import CountDetail from './CountDetail';
import {connect} from 'react-redux'
import {addLike} from '../actions/actions'

class LikeButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || 0
    }
    console.log(this.props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      likes: this.state.likes + 1
    })
    let data = {
      likes: this.state.likes
    }
    this.props.addLike(data)
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
  return this.state
}


export default connect(mapStateToProps, {addLike})(LikeButton);













// <ButtonDetail click={this.handleClick} />
// <CountDetail likes={this.props.likes} />
