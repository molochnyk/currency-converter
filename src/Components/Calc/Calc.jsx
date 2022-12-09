import React from 'react';
import styled, { css } from 'styled-components';

const Calc = () => {
  return (
    <CalcWrapper>
      <CalcWrapperOutput>
        <CalcWrapperOutputPrevious>123,234*</CalcWrapperOutputPrevious>
        <CalcWrapperOutputCurrent>123,234</CalcWrapperOutputCurrent>
      </CalcWrapperOutput>
      <CalcWrapperButton twoRow accentColor>
        AC
      </CalcWrapperButton>
      <CalcWrapperButton accentColor>DEL</CalcWrapperButton>
      <CalcWrapperButton accentColor>%</CalcWrapperButton>
      <CalcWrapperButton>1</CalcWrapperButton>
      <CalcWrapperButton>2</CalcWrapperButton>
      <CalcWrapperButton>3</CalcWrapperButton>
      <CalcWrapperButton accentColor>*</CalcWrapperButton>
      <CalcWrapperButton>4</CalcWrapperButton>
      <CalcWrapperButton>5</CalcWrapperButton>
      <CalcWrapperButton>6</CalcWrapperButton>
      <CalcWrapperButton accentColor>+</CalcWrapperButton>
      <CalcWrapperButton>7</CalcWrapperButton>
      <CalcWrapperButton>8</CalcWrapperButton>
      <CalcWrapperButton>9</CalcWrapperButton>
      <CalcWrapperButton accentColor>-</CalcWrapperButton>
      <CalcWrapperButton accentColor>.</CalcWrapperButton>
      <CalcWrapperButton>0</CalcWrapperButton>
      <CalcWrapperButton twoRow accentColor>
        =
      </CalcWrapperButton>
    </CalcWrapper>
  );
};

const CalcWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(80px, auto) repeat(5, 60px);
`;

const CalcWrapperOutput = styled('div')`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  justify-content: space-around;

  grid-column: 1 / -1;

  padding: 10px;

  background: rgba(0, 0, 0, 0.75);

  word-break: break-word;
  word-break: break-all;
`;

const CalcWrapperOutputPrevious = styled('div')`
  color: rgba(255, 255, 255, 0.75);
  font-size: 16px;
  font-weight: 300;
`;

const CalcWrapperOutputCurrent = styled('div')`
  font-size: 28px;
  color: rgb(255, 255, 255);
  font-weight: bold;
`;

const CalcWrapperButton = styled('button')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  border: 1px solid #00000022;

  color: #000000;

  background: #d9d9d9;

  cursor: pointer;

  &:hover,
  &:focus {
    background: rgba(217, 217, 217, 0.5);
  }

  ${(props) =>
    props.twoRow &&
    css`
      grid-column: span 2;
    `}

  ${(props) =>
    props.accentColor &&
    css`
      font-weight: bold;
      background: #fd8900;
      color: #fff;
      font-size: 22px;

      &:hover,
      &:focus {
        background: rgba(253, 135, 0, 0.863);
      }
    `}
`;

export default Calc;
