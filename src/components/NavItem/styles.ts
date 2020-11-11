import styled from 'styled-components';

export const NavItemContainer = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.button`
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #fff;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    &:hover {
      filter: brightness(1.2);
    };

    svg {
      fill: #ff9000;
      width: 20px;
      height: 20px; 
    };
`;

