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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      ...this.props.post
    })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state;
    this.props.onFormSubmit(data, this.props.history);
  }

render() {
  const { title, content } = this.props.postFormData
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
                value={title}
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
              value={content}
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


export default connect(mapStateToProps)(NewPostForm);
