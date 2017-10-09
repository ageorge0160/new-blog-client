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
    this.setState({
      likes: this.state.likes + 1
    })
    let data = {
      postId: this.props.post.id,
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
  return state
}


export default connect(mapStateToProps, {addLike})(LikeButton);