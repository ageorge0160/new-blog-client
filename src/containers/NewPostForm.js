import React from 'react';
import { connect } from 'react-redux';
import {updatePostFormData} from '../actions/PostForm'
import {createPost} from '../actions/actions'

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount() {
  //   this.setState({
  //     ...this.props.post
  //   })
  // }

  handleChange(event) {
    const { name, value } = event.target;
    const currentPostFormData = Object.assign({}, this.props.postFormData, {
      [name]: value
    })
    this.setState({
      [name]: value
    })
    this.props.updatePostFormData(currentPostFormData)
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.props)
  }

render() {
  return(
    <div className="NewPostFormDiv jumbotron">
      <h3>Create a new post:</h3>
      <form className="new-post-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">
              Title:
              <input
                type="text"
                name="title"
                value={this.props.title}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="content">
              Content:
            </label>
          </div>

          <div>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={this.props.content}
              onChange={this.handleChange}>
            </textarea>
          </div>

          <div>
            <input type="submit" name="confirm" value="Create Post"/>
          </div>

        </form>
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    postFormData: state.postFormData
  }
}


export default connect(mapStateToProps, {
  updatePostFormData,
  createPost
})(NewPostForm);
