/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import * as Styles from './styles';
import IProps from './index.d';

const NavItem: React.FC<IProps> = ({ icon, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <Styles.NavItemContainer>
      <Styles.IconButton onClick={() => setIsOpen(!isOpen)}>
        {icon}
      </Styles.IconButton>

      {isOpen && children}

    </Styles.NavItemContainer>
  );
};

export default NavItem;