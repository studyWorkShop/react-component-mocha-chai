import React from 'react';
import '../../styles/Display.scss';

class Display extends React.Component {
  render() {
    return (
      <div className='display'>
        <div className='display-items'>
          <div className='display-block'>块级元素1
            <span className='display-inline'>行内元素1</span></div>
          <div className='display-block'>块级元素2</div>
        </div>

        <div className='display-items'>
          <span className='display-inline'>行内元素1</span>
          <span className='display-inline'>行内元素2</span>
        </div>

        <div className='display-items'>
          <div className='display-inline-block'>Inline block</div>
          <div className='display-inline-block'>Inline block</div>
          <div className='display-inline-block'>Inline block</div>
          <div className='display-inline-block'>Inline block</div>
          <div className='display-inline-block'>Inline block</div>
          <div className='display-inline-block'>Inline block</div>
        </div>
      </div>
    )
  }
}

export default Display;