import React from 'react';

const boxModel = ['盒模型', 'Display', 'Box-sizing'];

class BoxModel extends React.Component {
  render() {
    return (
      <ul>
        {
          boxModel.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            );
          })
        }
      </ul>
    );
  }
}

export default BoxModel;
