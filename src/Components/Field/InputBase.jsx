import React from "react";
import PropTypes from "prop-types";
import { FiDelete } from "react-icons/fi";
import styled from "styled-components";
import "focus-visible/dist/focus-visible.js";

const InputBase = ({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  value,
  onChange,
  onClearInput,
}) => {
  return (
    <InputWrap>
      <InputLabel>{label}</InputLabel>
      <InputFildWrap>
        <InputField
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
        {value && (
          <InputBtnClear onClick={onClearInput}>
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

const InputField = styled.input`
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

InputBase.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputBase;
