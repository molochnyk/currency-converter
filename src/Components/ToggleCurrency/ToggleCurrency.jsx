import React, { useState } from "react";

import styled from "styled-components";

import { FiRepeat } from "react-icons/fi";

const ToggleCurrency = ({ currencySwap }) => {
  const [isSwap, setIsSwap] = useState(false);

  const handleClick = () => {
    setIsSwap(!isSwap);
    currencySwap();
  };

  return (
    <CurConvertBtnReverse isClickSwap={isSwap} onClick={handleClick}>
      <FiRepeat />
    </CurConvertBtnReverse>
  );
};

const CurConvertBtnReverse = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0;
  margin: 0 20px;
  border: none;
  background: transparent;
  cursor: pointer;

  transform: ${(props) => (props.isClickSwap ? "rotate(180deg)" : "none")};

  transition: transform 250ms ease-in;

  svg {
    transform: translateZ(0);
    will-change: transform;

    transition: transform 0.15s ease-out;

    stroke: ${({ theme }) => theme.text};
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }

  @media (max-width: 576px) {
    margin: 10px 0;
  }
`;

export default ToggleCurrency;
