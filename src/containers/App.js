import React, { Component } from 'react';
import '../App.css';
import Posts from '../components/Posts'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewPostForm from '../containers/NewPostForm'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/new" component={NewPostForm} />
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
