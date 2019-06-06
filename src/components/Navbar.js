import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to='/about'>
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to='/play'>
      <Menu.Item>
        See FlashCards
      </Menu.Item>
    </Link>
    <Link to='/sdfdf'>
      <Menu.Item>
        Click here if you dare
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar