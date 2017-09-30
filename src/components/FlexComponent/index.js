import React from 'react';

const flexItems = ['Flex1', 'Flex2', 'Flex3'];

class Flex extends React.Component {
  render() {
    return (
      <ul>
        {
          flexItems.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            );
          })
        }
      </ul>
    )
  }
}

export default Flex;