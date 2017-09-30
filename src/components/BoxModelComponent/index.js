import React from 'react';
import {Link} from 'react-router-dom';

const boxModel = [
  {
    name: '盒模型',
    route: 'basic'
  },
  {
    name: 'Display',
    route: 'display'
  },
  {
    name: 'Box-sizing',
    route: 'box-sizing'
  }
];

class BoxModel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          boxModel.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`${this.props.match.url}/${item.route}`}>{item.name}</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default BoxModel;
