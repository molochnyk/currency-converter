import React, { useState, useCallback, useEffect } from "react";

import styled from "styled-components";

import LoadError from "../containers/LoadError";

import Input from "../Components/Field/Input";
import Select from "../Components/Field/Select";
import CopyToClip from "../Components/CopyToClip/CopyToClip";
import ToggleCurrency from "../Components/ToggleCurrency/ToggleCurrency";
import ToggleFavorites from "../Components/ToggleFavorites/ToggleFavorites";

import useFetchDebounce from "../hooks/useFetchDebounce";
import useFavoritesCurrency from "../hooks/useFavoritesCurrency";

import { DEFAULT_CURRENCY } from "../constants/defaultCurrency";

const DEFAULT_AMOUNT = "1";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [inputAmount, setInputAmount] = useState(DEFAULT_AMOUNT);

  const [data, isLoading, isError] = useFetchDebounce(
    fromCurrency,
    toCurrency,
    inputAmount
  );

  const [favorites, toggleFavorites] = useFavoritesCurrency(
    fromCurrency,
    toCurrency
  );

  const currencySwap = useCallback(() => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  }, [fromCurrency, toCurrency]);

  const checkLocalStoragePair = (value) => {
    if (value) {
      setFromCurrency(JSON.parse(value)[0]);
      setToCurrency(JSON.parse(value)[1]);
    } else {
      setFromCurrency(DEFAULT_CURRENCY.from);
      setToCurrency(DEFAULT_CURRENCY.to);
    }
  };

  useEffect(() => {
    const localPair = window.localStorage.getItem("curPair");
    checkLocalStoragePair(localPair);
  }, []);

  const dataResultView = data && data.toLocaleString();

  return (
    <CurConvertWrap errorStatus={isError ? "error" : "default"}>
      <ToggleFavorites
        favorites={favorites}
        toggleFavorites={toggleFavorites}
      />

      <CurConvertHead>
        <CurConvertHeadSupTitle>Курс Обмена</CurConvertHeadSupTitle>
        <CurConvertValue>
          <CurConvertValueBase>
            {inputAmount
              ? `${inputAmount} ${fromCurrency}`
              : `Введите число ${fromCurrency}`}
          </CurConvertValueBase>
          <CurConvertValueText>равно</CurConvertValueText>
          <CurConvertValueTo>
            <LoadError isLoading={isLoading} isError={isError}>
              <CopyToClip value={dataResultView}>
                {dataResultView} {toCurrency}
              </CopyToClip>
            </LoadError>
          </CurConvertValueTo>
        </CurConvertValue>
      </CurConvertHead>

      <CurConvertInpWrapper>
        <Input
          inputAmount={inputAmount}
          onChangeAmount={(e) => setInputAmount(e.target.value)}
          onClearAmount={() => setInputAmount("")}
        />
      </CurConvertInpWrapper>

      <CurConvertSelectWrapper>
        <Select
          labelText="Меняю"
          fromToCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.value)}
        />
        <ToggleCurrency currencySwap={currencySwap} />
        <Select
          labelText="Получаю"
          fromToCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.value)}
        />
      </CurConvertSelectWrapper>
    </CurConvertWrap>
  );
};

const CurConvertWrap = styled.div`
  position: relative;
  max-width: 800px;
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

const CurConvertHead = styled.div`
  margin-bottom: 35px;
`;

const CurConvertHeadSupTitle = styled.h1`
  margin: 10px 0 20px;
  font-size: 22px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-weight: 100;
`;

const CurConvertValue = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CurConvertValueBase = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
`;

const CurConvertValueText = styled.div`
  margin-bottom: 10px;
  font-size: 26px;
  font-family: "Bebas Neue", cursive;
  font-weight: 400;
`;

const CurConvertValueTo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
`;

const CurConvertInpWrapper = styled.div`
  margin-bottom: 20px;
`;

const CurConvertSelectWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default CurrencyConverter;
