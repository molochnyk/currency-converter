import React from "react";
import styled from "styled-components";
import { MdLightMode, MdModeNight } from "react-icons/md";

const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <Button
      onClick={toggleTheme}
      tabIndex="0"
      aria-label="Изменить цветовую тему"
    >
      {theme === "light" ? <MdLightMode /> : <MdModeNight />}
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  right: 30px;
  top: 20px;

  background: transparent;
  box-shadow: none;
  border: none;

  z-index: 1;

  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.btnMode};
  }

  @media (max-width: 992px) {
    top: 10px;
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 576px) {
    top: 44px;
    right: 32px;
  }
`;

export default ToggleTheme;
