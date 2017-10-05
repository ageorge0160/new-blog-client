import React, { Component } from 'react';
import './App.css';
import Posts from './Posts'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/posts')
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
