import React from "react";

import { FiDelete } from "react-icons/fi";

import NumberFormat from "react-number-format";

import "focus-visible/dist/focus-visible.js";

import styled from "styled-components";

const Input = ({ inputAmount, onChangeAmount, onClearAmount }) => {
  return (
    <InputWrap>
      <InputLabel>Количество</InputLabel>
      <InputFildWrap>
        <InputField
          name="amount"
          placeholder="сколько денег 100"
          autoComplete={"off"}
          allowNegative={false}
          value={inputAmount}
          onChange={onChangeAmount}
          isAllowed={({ floatValue }) => floatValue <= 9999999999}
        />

        {inputAmount > 1 && (
          <InputBtnClear onClick={onClearAmount}>
            <FiDelete />
          </InputBtnClear>
        )}
      </InputFildWrap>
    </InputWrap>
  );
};

const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.p`
  margin: 0 0 5px 0;
  font-size: 18px;
`;

const InputFildWrap = styled.div`
  position: relative;
`;

const InputField = styled(NumberFormat)`
  position: relative;
  display: block;
  width: 100%;
  height: 55px;
  padding: 0 40px 0 20px;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;

  font-size: 22px;

  outline: none;

  transition: all 250ms ease-in;

  &::placeholder {
    font-size: 20px;
    color: ${({ theme }) => theme.placeholder};
    transition: all 250ms ease-in;
  }

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    &::placeholder {
      color: ${({ theme }) => theme.placeholderHover};
    }
  }

  &:focus {
    border-color: ${({ theme }) => theme.default};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.default};
    &::placeholder {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    height: 48px;
  }
`;

const InputBtnClear = styled.button`
  all: unset;

  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  cursor: pointer;

  svg {
    stroke: rgb(204, 204, 204);
    transition: all 250ms ease;
  }

  &:hover {
    svg {
      stroke: rgb(153, 153, 153);
      transition: all 250ms ease;
    }
  }
`;

export default Input;
