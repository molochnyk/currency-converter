import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <WrapperText>Упс, что то пошло не так</WrapperText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: max-content;

  margin: 0 auto;
  padding: 6px 12px;

  border-radius: 3px;
  background: ${({ theme }) => theme.error};
`;

const WrapperText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: center;
  word-break: break-word;
  color: ${({ theme }) => theme.errorText};

  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Error;
