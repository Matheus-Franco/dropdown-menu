import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  animation: ${appearFromTop} 0.4s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  };

  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  };

  .menu-primary-exit {
    position: absolute;
  };
  
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  };
  
  .menu-secondary-enter {
    transform: translateX(110%);
  };

  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  };

  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  };
`;

export const Menu = styled.div`
  width: 100%;
`;

export const MenuItem = styled.button`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: 0.3s;
  padding: 0.5rem;
  background: transparent;

  &:hover {
    background: #EDEDF0;
  };
`;

export const IconRight = styled.span`
  margin-left: auto;
`;

export const IconButton = styled.span`
  margin-right: 0.5rem;

  &:hover {
    filter: none;
  }
`;
  