import React from 'react';
import '../../styles/Flex.scss';

class FlexBasic extends React.Component {
  render() {
    return (
      <div className='flex-basic'>
        <div className='container'>
          <h4>flex-direction</h4>
          <div className='flex-direction border'>
            <div className='flex-box'>direction1</div>
            <div className='flex-box'>direction2</div>
            <div className='flex-box'>direction3</div>
          </div>

          <h4>flex-wrap</h4>
          <div className='flex-wrap border'>
            <div className='flex-box'>wrap1</div>
            <div className='flex-box'>wrap2</div>
            <div className='flex-box'>wrap3</div>
            <div className='flex-box'>wrap4</div>
            <div className='flex-box'>wrap5</div>
          </div>

          <h4>flex-flow</h4>
          <div className='flex-flow border'>
            <div className='flex-box'>flow1</div>
            <div className='flex-box'>flow2</div>
            <div className='flex-box'>flow3</div>
            <div className='flex-box'>flow4</div>
            <div className='flex-box'>flow5</div>
          </div>

          <h4>justify-content</h4>
          <div className='justify-content border'>
            <div className='flex-box'>justify-content1</div>
            <div className='flex-box'>justify-content2</div>
            <div className='flex-box'>justify-content3</div>
          </div>

          <h4>align-items</h4>
          <div className='align-items border'>
            <div className='flex-box'>align-items1</div>
            <div className='flex-box'>align-items2</div>
            <div className='flex-box'>align-items3</div>
          </div>

          <h4>align-content</h4>
          <div className='align-content border'>
            <div className='flex-box'>align-content1</div>
            <div className='flex-box'>align-content2</div>
            <div className='flex-box'>align-content3</div>
            <div className='flex-box'>align-content4</div>
            <div className='flex-box'>align-content5</div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlexBasic;

