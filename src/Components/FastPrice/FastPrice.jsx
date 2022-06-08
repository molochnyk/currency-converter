import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FastPrice = ({ dataAmount, onAmountFast }) => {
  const handleClickPrice = (price) => {
    onAmountFast(price);
  };

  return (
    <FastPriceWrap className="fastprice">
      {dataAmount.map((itm) => {
        return (
          <FastPriceItm
            className="fastprice_itm"
            key={itm.price}
            onClick={() => handleClickPrice(itm.price)}
          >
            {itm.price}
          </FastPriceItm>
        );
      })}
    </FastPriceWrap>
  );
};

const FastPriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  flex-basis: 50%;

  @media (max-width: 428px) {
    width: 100%;
  }
`;

const FastPriceItm = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  width: max-content;
  min-width: 40px;
  height: 40px;

  border-radius: 5px;

  margin-right: 10px;

  background: ${({ theme }) => theme.greyLight};
  color: ${({ theme }) => theme.textLetter};

  font-size: 18px;

  cursor: pointer;

  transition: all 250ms ease;

  &:hover {
    background: ${({ theme }) => theme.greyLightHover};
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 992px) {
    margin-right: 6px;
    padding: 0 10px;
  }

  @media (max-width: 428px) {
  }
`;

FastPrice.propTypes = {
  dataAmount: PropTypes.array.isRequired,
  onAmountFast: PropTypes.func.isRequired,
};

export default FastPrice;
