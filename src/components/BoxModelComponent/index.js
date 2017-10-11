import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Basic from './Basic';
import Display from './Display';
import BoxSizing from './BoxSizing';

const boxModels = [
  {
    name: '盒模型',
    path: 'basic',
    exact: true,
    main: () => <Basic/>
  },
  {
    name: 'Display',
    path: 'display',
    main: () => <Display/>
  },
  {
    name: 'Box-sizing',
    path: 'box-sizing',
    main: () => <BoxSizing/>
  }
];

const BoxModel = ({ match }) => (
  <Router>
    <div className='side-bar'>
      <div className='side-bar-list'>
        <ul>
          {boxModels.map((item, index) => (
            <li key={index}>
              <Link to={`${match.url}/${item.path}`} className='list-item'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {
          boxModels.map((item, index) => (
            <Route key={index} path={`${match.url}/${item.path}`} component={item.main}/>
          ))
        }
      </div>
    </div>
  </Router>
);

export default BoxModel;
