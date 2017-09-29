import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import BoxModel from './BoxModelComponent';
import Flex from './FlexComponent';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <App/>
      <Route exact path="/" component={BoxModel}/>
      <Route path="/box-model" component={BoxModel}/>
      <Route path="/flex" component={Flex}/>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
