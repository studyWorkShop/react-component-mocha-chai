import React from 'react';
import '../../styles/Flex1.scss';

class Flex1 extends React.Component {
  render() {
    return (
      <div className='flex1'>
        <div className='case'>
          <div className='case-box left'></div>
          <div className='case-box middle'></div>
          <div className='case-box right'></div>
        </div>
      </div>
    );
  }
}

export default Flex1;
