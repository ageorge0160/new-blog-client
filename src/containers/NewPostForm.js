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

  handleChange(event) {
    let name = event.target.name
    this.setState({
    [name]: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    let data = {
      post: {
        title: this.state.title,
        content: this.state.content
      }
    }

    this.props.createPost(data)

    this.setState({
      title: '',
      content: ''
    })
    window.location.href='/'
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
                value={this.state.title}
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
              value={this.state.content}
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



export default NewPostForm;
