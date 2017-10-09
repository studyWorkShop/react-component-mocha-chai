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

        <div className='items'>
          <h4>order</h4>
          <div className='flex-order border'>
            <div className='flex-box box-num1'>box-num1</div>
            <div className='flex-box box-num2'>box-num2</div>
            <div className='flex-box box-num3'>box-num3</div>
            <div className='flex-box box-num4'>box-num4</div>
            <div className='flex-box box-num5'>box-num5</div>
          </div>

          <h4>flex-grow</h4>
          <div className='flex-grow border'>
            <div className='flex-box'>flex-grow1</div>
            <div className='flex-box special'>flex-grow2</div>
            <div className='flex-box'>flex-grow3</div>
            <div className='flex-box'>flex-grow4</div>
            <div className='flex-box'>flex-grow5</div>
          </div>

          <h4>flex-shrink</h4>
          <div className='flex-shrink border'>
            <div className='flex-box'>flex-shrink1</div>
            <div className='flex-box special'>flex-shrink2</div>
            <div className='flex-box'>flex-shrink3</div>
            <div className='flex-box'>flex-shrink4</div>
            <div className='flex-box'>flex-shrink5</div>
          </div>

          <h4>flex-basis</h4>
          <div className='flex-basis border'>
            <div className='flex-box'>flex-basis1</div>
            <div className='flex-box special'>flex-basis2</div>
            <div className='flex-box'>flex-basis3</div>
            <div className='flex-box'>flex-basis4</div>
            <div className='flex-box'>flex-basis5</div>
          </div>

          <h4>flex</h4>
          <div className='flex border'>
            <div className='flex-box'>flex1</div>
            <div className='flex-box special'>flex2</div>
            <div className='flex-box'>flex3</div>
            <div className='flex-box'>flex4</div>
            <div className='flex-box'>flex5</div>
          </div>

          <h4>align-self</h4>
          <div className='align-self border'>
            <div className='flex-box'>align-self1</div>
            <div className='flex-box special'>align-self2</div>
            <div className='flex-box'>align-self3</div>
            <div className='flex-box'>align-self4</div>
            <div className='flex-box'>align-self5</div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlexBasic;

