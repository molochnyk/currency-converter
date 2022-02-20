import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocalStorage } from "react-use";
import { FcLikePlaceholder } from "react-icons/fc";

const BtnLike = ({ fromCurrency, toCurrency }) => {
  const [active, setActive] = useState(false);
  const [valBtn, setValBtn] = useLocalStorage("curlike");
  const [valCur, setValCur, removeValCur] = useLocalStorage("curCurrency");

  const handleClick = () => {
    setActive(!active);
    setValBtn(!active);

    if (!valBtn) {
      setValCur([fromCurrency, toCurrency]);
    } else {
      removeValCur();
    }
  };

  useEffect(() => {
    setActive(valBtn);
  }, [active, valBtn]);

  return (
    <ButtonLikeCurrency
      isActive={active ? "true" : "false"}
      onClick={handleClick}
    >
      <FcLikePlaceholder />
    </ButtonLikeCurrency>
  );
};

const ButtonLikeCurrency = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  background: transparent;
  border: none;
  cursor: pointer;

  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.06);
  }

  svg {
    height: 30px;
    width: 30px;

    path {
      fill: ${({ isActive }) => (isActive === "true" ? "#2f98fa" : "#bebebe")};
      transition: all 250ms ease;
    }
  }
`;

export default BtnLike;
