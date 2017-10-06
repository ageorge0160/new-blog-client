import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeContent = this.handleChangeContent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.title
    })
  }

  handleChangeContent(event) {
    this.setState({
      title: event.target.content
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state;
    const { createPost } = this.props;
    createPost(data)
    this.setState({
      title: '',
      content: ''
    })
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
                onChange={this.handleChangeTitle}
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
              onChange={this.handleChangeContent}>
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

export default NewPostForm
