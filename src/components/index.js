import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import BoxModel from './content/BoxModel';
import Flex from './content/Flex';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BoxModel}/>
      <Route path="/box-model" component={BoxModel}/>
      <Route path="/flex" component={Flex}/>
    </Route>
  </Router>
  , document.getElementById('root'));