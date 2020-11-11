import React from 'react';
import * as BiIcon from 'react-icons/bi'

import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import DropdownMenu from './components/DropdownMenu';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
    <GlobalStyle />

    <Navbar>
      <NavItem icon={<BiIcon.BiMenu />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    </>
  );
};


export default App;
