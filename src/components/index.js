import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import BoxModel from './BoxModelComponent';
import Flex from './FlexComponent';

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/box-model">
        <button>
          盒模型
        </button>
      </Link>
      <Link to="/flex">
        <button>
          Flex
        </button>
      </Link>

      <Route exact path="/" component={BoxModel}/>
      <Route path="/box-model" component={BoxModel}/>
      <Route path="/flex" component={Flex}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));
