import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: props.name};
  }

  render() {
    return (
      <div className='nav' onClick={this.props.onChange}>
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
      </div>
    );
  }
}
