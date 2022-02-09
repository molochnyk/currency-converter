import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { BsEmojiFrown } from "react-icons/bs";

const NoMatch = () => {
  return (
    <Wrap>
      <Title>
        Ой, такой страницы не существует <BsEmojiFrown />
      </Title>
      <LinkBack to="/">Вернуться на главную</LinkBack>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  padding: 50px 0;

  @media (max-width: 576px) {
    padding: 100px 0;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0 0 50px 0;

  font-size: 32px;

  svg {
    width: 30px;
    height: 30px;
    margin-left: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    svg {
      margin-left: 0px;
      margin-top: 10px;
    }
  }

  @media (max-width: 400px) {
    font-size: 28px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const LinkBack = styled(Link)`
  display: block;
  width: max-content;
  margin: 0 auto;

  border-bottom: 1px solid;
  text-decoration: none;

  color: ${({ theme }) => theme.linkMode};

  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
    color: ${({ theme }) => theme.linkModeHover};
  }
`;

export default NoMatch;
