import React, {Component} from 'react';
import Header from './Header';

export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
