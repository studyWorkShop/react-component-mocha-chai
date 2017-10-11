import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import BoxModel from './BoxModelComponent';
import Flex from './FlexComponent';

const menu = [
  {
    name: '盒模型',
    path: '/box-model'
  },
  {
    name: 'Flex',
    path: '/flex'
  }
];

const App = () => (
  <BrowserRouter>
    <div>
      <ul className='nav'>
        {
          menu.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className='nav-item'>{item.name}</Link>
            </li>
          ))
        }
      </ul>
      <Route exact path="/box-model" component={BoxModel}/>
      <Route path="/flex" component={Flex}/>
    </div>
  </BrowserRouter>
);

export default App;
