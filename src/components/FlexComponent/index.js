import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FlexBasic from './FlexBasic';
import Flex1 from './Flex1';
import Flex2 from './Flex2';
import '../../styles/sideBar.scss';

const flexItems = [
  {
    name: 'Flex Basic',
    path: 'flex-basic',
    main: () => <FlexBasic/>
  },
  {
    name: 'Flex1',
    path: 'flex1',
    main: () => <Flex1/>
  },
  {
    name: 'Flex2',
    path: 'flex2',
    main: () => <Flex2/>
  },
  {
    name: 'Flex3',
    path: 'flex3',
    main: () => <div>flex3</div>
  }
];

class Flex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className='side-bar'>
          <div className='side-bar-list'>
            <ul>
              {
                flexItems.map((item, index) => (
                  <li key={index}>
                    <Link to={`${this.props.match.url}/${item.path}`} className='list-item'>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            {
              flexItems.map((item, index) => (
                <Route key={index} path={`${this.props.match.url}/${item.path}`} component={item.main}/>
              ))
            }
          </div>
        </div>
      </Router>
    )
  }
}

export default Flex;