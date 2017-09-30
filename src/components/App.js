import React from 'react';
import {Link} from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: props.name};
  }

  render() {
    return (
      <ul className='nav' onClick={this.props.onChange}>
        <li>
          <Link to="/box-model" className='nav-item'>盒模型</Link>
        </li>
        <li>
          <Link to="/flex" className='nav-item'>Flex</Link>
        </li>
      </ul>
    );
  }
}
