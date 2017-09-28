import React from 'react';
import Header from './Header';

const App = (props) => (
  <div>
    <div>
      <Header/>
    </div>

    <div>
      {props.children}
    </div>
  </div>
);

export default App;
