import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './containers/Header'
import Footer from './containers/Footer'


ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Root} />
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
