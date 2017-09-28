import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/App';
import BoxModel from './components/content/BoxModel';
import Flex from './components/content/Flex';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BoxModel}/>
      <Route path="/box-model" component={BoxModel}/>
      <Route path="/flex" component={Flex}/>
    </Route>
  </Router>
  , document.getElementById('root'));
