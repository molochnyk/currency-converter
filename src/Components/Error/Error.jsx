import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <WrapperText>Упс, что то пошло не так :(</WrapperText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 6px 12px;
  border-radius: 3px;
  background: ${({ theme }) => theme.error};
`;

const WrapperText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.errorText};

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }

  @media (max-width: 350px) {
    font-size: 14px;
  }
`;

export default Error;
