import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Конвертер", path: "/" },
  { name: "Валюты", path: "/list-currencies" },
];

const Nav = () => {
  return (
    <Navigate>
      <NavigateList>
        {links.map((link) => (
          <NavigateListItm key={link.path}>
            <NavLink to={link.path}>
              <span>{link.name}</span>
            </NavLink>
          </NavigateListItm>
        ))}
      </NavigateList>
    </Navigate>
  );
};

const Navigate = styled.nav`
  position: absolute;
  left: 50px;
  top: 20px;

  @media (max-width: 1200px) {
    position: relative;
    left: 0px;
    top: 0;
    margin-bottom: 32px;
  }

  @media (max-width: 992px) {
  }
`;

const NavigateList = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

const NavigateListItm = styled.li`
  position: relative;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    position: relative;
    font-size: 20px;
    text-decoration: none;
    line-height: 1;
    letter-spacing: 0.6px;
    color: ${({ theme }) => theme.text};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 2px;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.default};

      transition: all 0.2s linear;

      opacity: 0;
    }

    &:hover {
      &::before {
        opacity: 1;
        height: 10px;
      }
    }

    span {
      position: relative;
    }
  }

  .active {
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    margin-bottom: 0;
    margin-right: 30px;
  }
`;

export default Nav;
