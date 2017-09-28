import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/box-model">
          <button>盒模型</button>
        </Link>
        <Link to="/flex">
          <button>Flex</button>
        </Link>
      </div>
    );
  }
}
