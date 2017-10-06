import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import store from './configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import NewPostForm from './containers/NewPostForm'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={App} />
        <Route exact path="/posts/new" component={NewPostForm} />
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
