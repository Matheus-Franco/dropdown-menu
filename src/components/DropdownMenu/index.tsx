/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';

import * as Styles from './styles';
import IProps from './index.d';

const DropdownMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('main');
  const [menuHeight, setMenuHeight] = useState<number | undefined>(0);
  const dropdownRef = useRef<any>(null);
  
  useEffect(() => {
    const height = dropdownRef.current?.firstChild.offSetHeight;
    setMenuHeight(height);
  }, []);
  
  const calcHeight = (el: HTMLElement): void => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };
  
  const DropdownItem = (props: IProps): JSX.Element => {
    return (
      <Styles.MenuItem onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <Styles.IconButton>{props.leftIcon}</Styles.IconButton>
        {props.children}
        <Styles.IconRight>{props.rightIcon}</Styles.IconRight>
      </Styles.MenuItem>
    );
  };
  
  return (
    <Styles.Dropdown style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <Styles.Menu>
          <DropdownItem>
            <h2>First Title</h2>
          </DropdownItem>
          <DropdownItem
            rightIcon={<FiIcons.FiSettings />}
            goToMenu="techs">
            <p>Technologies</p>
          </DropdownItem>
          <DropdownItem
            rightIcon={<FaIcons.FaPastafarianism />}
            goToMenu="animals">
            <p>Animals</p>
          </DropdownItem>
        </Styles.Menu>
      </CSSTransition>
  
      <CSSTransition
        in={activeMenu === 'techs'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <Styles.Menu>
          <DropdownItem goToMenu="main">
            <h2>Technologies</h2>
          </DropdownItem>
          <DropdownItem rightIcon={<RiIcons.RiCodeFill />}>
            <p>HTML</p>
          </DropdownItem>
          <DropdownItem rightIcon={<RiIcons.RiCodeFill />}>
            <p>CSS</p>
          </DropdownItem>
          <DropdownItem rightIcon={<RiIcons.RiCodeFill />}>
            <p>JavaScript</p>
          </DropdownItem>
          <DropdownItem rightIcon={<RiIcons.RiCodeFill />}>
            <p>Awesome!</p>
          </DropdownItem>
        </Styles.Menu>
      </CSSTransition>
  
      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <Styles.Menu>
          <DropdownItem goToMenu="main">
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem rightIcon={<RiIcons.RiCodeFill />}>
            <p>Kangaroo</p>
          </DropdownItem>
          <DropdownItem rightIcon={<RiIcons.RiCodeFill />}>
            <p>Frog</p>
          </DropdownItem>
          <DropdownItem rightIcon={<RiIcons.RiCodeFill />}>
            <p>Horse</p>
          </DropdownItem>
          <DropdownItem rightIcon={<RiIcons.RiCodeFill />}>
            <p>Hedgehog</p>
          </DropdownItem>
        </Styles.Menu>
      </CSSTransition>
    </Styles.Dropdown>
  );
};

export default DropdownMenu;