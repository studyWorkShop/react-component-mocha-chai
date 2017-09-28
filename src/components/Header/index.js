import React from 'react';
import {Link} from 'react-router';

const Header = () => (
  <div>
    <Link to="/box-model">
      <button>盒模型</button>
    </Link>
    <Link to="/flex">
      <button>Flex</button>
    </Link>
  </div>
);

export default Header;