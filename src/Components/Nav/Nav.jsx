import React, { useState, useEffect } from "react";
import { useLockBodyScroll } from "react-use";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Конвертер", path: "/" },
  { name: "Валюты", path: "/list-currencies" },
  { name: "Крипто", path: "/crypto" },
];

const mediaQuery = "screen and (min-width: 768px)";

const Nav = () => {
  const [open, setOpen] = useState(false);

  useLockBodyScroll(open);

  const mql = window.matchMedia(mediaQuery);
  const [showDesktopMenu, setShowDesktopMenu] = useState(mql.matches); // true or false

  const handleOpenMenu = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleCloseOverlay = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleMediaChange = function () {
      setShowDesktopMenu(this.matches);
    };
    mql.addEventListener("change", handleMediaChange);
    setShowDesktopMenu(mql.matches);

    return () => {
      mql.removeEventListener("change", handleMediaChange);
    };
  }, [mql]);

  if (showDesktopMenu) {
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
  }

  return (
    <MobNavBlock>
      <MobNavOpen onClick={handleOpenMenu}>
        <CgMenuLeftAlt />
      </MobNavOpen>
      <MobNavOverlay
        menuStatus={open}
        onClick={handleCloseOverlay}
      ></MobNavOverlay>
      <MobNav menuStatus={open}>
        <MobNavClose onClick={handleCloseMenu}>
          <CgClose />
        </MobNavClose>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} onClick={handleCloseMenu}>
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </MobNav>
    </MobNavBlock>
  );
};

const Navigate = styled.nav`
  position: absolute;
  left: 50px;
  top: 20px;

  z-index: 1;

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

const MobNavBlock = styled.div`
  margin-bottom: 32px;
`;

const MobNavOpen = styled.button`
  display: block;
  width: 30px;
  height: 30px;

  padding: 0;
  border: none;

  background: transparent;

  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const MobNavClose = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;

  width: 30px;
  height: 30px;

  padding: 0;
  border: none;

  background: transparent;

  z-index: 2;
`;

const MobNav = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #fff;

  transform: ${({ menuStatus }) =>
    menuStatus ? `translateX(0)` : `translateX(-100%)`};

  transition: all 300ms ease;

  z-index: 2;

  ul {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    list-style: none;

    background: #fff;
    z-index: 1;
  }

  li {
    position: relative;
    margin-bottom: 35px;

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
  }
`;

const MobNavOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;

  opacity: ${({ menuStatus }) => (menuStatus ? 1 : 0)};

  background: ${({ theme }) => theme.defaultAlpha};
  pointer-events: ${({ menuStatus }) => (menuStatus ? `initial` : `none`)};

  transition: all 300ms ease;

  z-index: 1;
`;

export default Nav;
