import React from 'react';
import '../../styles/BoxModel.scss';

class Basic extends React.Component {
  render() {
    return (
      <div id='box-basic'>
        <span className='margin-text'>Margin Edge</span>
        <div className='margin-edge'>
          <span className='border-text'>border Edge</span>
          <div className='border-edge'>
            <span className='padding-text'>padding Edge</span>
            <div className='padding-edge'>
              <div className='content-text'>content Edge</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Basic;