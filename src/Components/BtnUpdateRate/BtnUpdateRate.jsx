import React from 'react';
import styled from 'styled-components';

const BtnUpdateRate = ({ onRefreshPage }) => {
  return (
    <BtnWrapper>
      <Btn onClick={onRefreshPage}>UPDATE</Btn>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

const Btn = styled.button`
  cursor: pointer;
`;

export default BtnUpdateRate;
