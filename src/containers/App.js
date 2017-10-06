import React, { Component } from 'react';
import '../App.css';
import Posts from '../components/Posts'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      posts: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} />
      </div>
    )
  }
}

export default App;
