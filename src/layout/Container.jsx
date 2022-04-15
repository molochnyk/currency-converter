import React from "react";
import styled from "styled-components";

const Container = ({ isErrorStatus, title, children }) => {
  return (
    <CurConvertWrap errorStatus={isErrorStatus ? "error" : "default"}>
      <CurConvertHeadSupTitle>{title}</CurConvertHeadSupTitle>

      {children}
    </CurConvertWrap>
  );
};

const CurConvertWrap = styled.div`
  position: relative;
  max-width: 800px;
  min-height: 400px;
  margin: 0 auto;
  padding: 30px 45px 45px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  border-top: 10px solid;
  border-color: ${(props) =>
    props.errorStatus === "error" ? props.theme.error : props.theme.default};
  background: ${({ theme }) => theme.main};

  @media (max-width: 576px) {
    padding: 22px 32px 38px;
  }
`;

const CurConvertHeadSupTitle = styled.h1`
  margin: 10px 0 30px;
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-weight: 100;
`;

export default Container;
