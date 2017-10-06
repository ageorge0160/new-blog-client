import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import NewPostForm from './containers/NewPostForm'

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Root} />
      <Route exact path="/posts/new" component={NewPostForm} />
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
