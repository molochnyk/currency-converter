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

    transition: transform 200ms linear;
  }

  &:hover {
    svg {
      transform: rotate(30deg);
    }
  }

  @media (max-width: 1200px) {
    top: 15px;
  }

  @media (max-width: 992px) {
    top: 20px;
    svg {
      width: 33px;
      height: 33px;
    }
  }

  @media (max-width: 576px) {
  }
`;

export default ToggleTheme;
