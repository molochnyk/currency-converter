import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FcLikePlaceholder } from "react-icons/fc";

const ToggleFavorites = ({ favorites, toggleFavorites }) => {
  return (
    <ButtonLikeCurrency
      isActive={favorites === "false" ? "false" : "true"}
      onClick={toggleFavorites}
    >
      <FcLikePlaceholder />
    </ButtonLikeCurrency>
  );
};

ToggleFavorites.propTypes = {
  favorites: PropTypes.string.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
};

const ButtonLikeCurrency = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  background: transparent;
  border: none;
  cursor: pointer;

  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.06);
  }

  svg {
    height: 30px;
    width: 30px;

    path {
      fill: ${({ isActive }) => (isActive === "true" ? "#2f98fa" : "#bebebe")};
      transition: all 250ms ease;
    }
  }
`;

export default ToggleFavorites;
