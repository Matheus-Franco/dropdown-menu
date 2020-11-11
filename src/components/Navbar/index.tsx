import React from 'react';

import * as Styles from './styles';
import IProps from './index.d';

const Navbar: React.FC<IProps> = ({ children }) => {
  return (
    <Styles.Container>
      <Styles.ContainerNav>
          {children}
      </Styles.ContainerNav>
    </Styles.Container>
  );
};

export default Navbar;