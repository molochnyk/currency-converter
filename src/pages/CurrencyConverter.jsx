import React, { useState, useCallback, useEffect } from "react";
import { AiOutlineCopy } from "react-icons/ai";

import styled from "styled-components";

import LoadError from "../containers/LoadError";

import Input from "../Components/Field/Input";
import Select from "../Components/Field/Select";
import CopyToClip from "../Components/CopyToClip/CopyToClip";
import ToggleCurrency from "../Components/ToggleCurrency/ToggleCurrency";
import ToggleFavorites from "../Components/ToggleFavorites/ToggleFavorites";
import Container from "../layout/Container";

import useFetchDebounce from "../hooks/useFetchDebounce";
import useFavoritesCurrency from "../hooks/useFavoritesCurrency";

import { DEFAULT_CURRENCY } from "../constants/defaultCurrency";
import { onlyNumber } from "../helpers/onlyNumber";

const DEFAULT_AMOUNT = "1";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState(DEFAULT_CURRENCY.from); // or ""
  const [toCurrency, setToCurrency] = useState(DEFAULT_CURRENCY.to); // or ""
  const [inputAmount, setInputAmount] = useState(DEFAULT_AMOUNT);

  const [data, isLoading, isError] = useFetchDebounce(
    fromCurrency,
    toCurrency,
    onlyNumber(inputAmount)
  );

  const [favorites, toggleFavorites] = useFavoritesCurrency(
    fromCurrency,
    toCurrency
  );

  const currencySwap = useCallback(() => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  }, [fromCurrency, toCurrency]);

  const clearAmountInput = () => {
    setInputAmount("1");
  };

  const changeInputAmount = (e) => {
    setInputAmount(e.target.value);
  };

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

  const dataInputView = inputAmount ? inputAmount : `Введите число`;
  const dataOutputView = data && data.toLocaleString();

  return (
    <Container isErrorStatus={isError} title="Курс Обмена">
      <ToggleFavorites
        favorites={favorites}
        toggleFavorites={toggleFavorites}
      />

      <CurConvertHead>
        <CurConvertValue>
          <CurConvertValueFrom>
            <CurConvertLetter>{fromCurrency}</CurConvertLetter>
            <CurConvertNumber>{dataInputView}</CurConvertNumber>
          </CurConvertValueFrom>
          <CurConvertValueDelimiter></CurConvertValueDelimiter>
          <CurConvertValueTo>
            <CurConvertLetter>{toCurrency}</CurConvertLetter>
            <LoadError isLoading={isLoading} isError={isError}>
              <CopyToClip value={dataOutputView}>
                <CopyToClipIcon />
                <CurConvertNumber>{dataOutputView}</CurConvertNumber>
              </CopyToClip>
            </LoadError>
          </CurConvertValueTo>
        </CurConvertValue>
      </CurConvertHead>

      <CurConvertInpWrapper>
        <Input
          inputAmount={inputAmount}
          onChangeAmount={changeInputAmount}
          onClearAmount={clearAmountInput}
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
    </Container>
  );
};

const CurConvertHead = styled.div`
  margin-bottom: 35px;
`;

const CurConvertValue = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;

  margin: 0 auto;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const CurConvertValueFrom = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 48%;

  word-break: break-all;

  @media (max-width: 576px) {
    flex-direction: row;
    width: 100%;
  }
`;

const CurConvertLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 15px;

  width: 100px;
  height: 50px;

  border-radius: 5px;

  font-size: 30px;
  font-weight: bold;

  background: #f9fafb;
  color: ${({ theme }) => theme.textLetter};

  @media (max-width: 576px) {
    margin-bottom: 0;
    margin-right: 25px;
    min-width: 90px;
    width: 90px;
    height: 45px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    margin-right: 15px;
    min-width: 60px;
    width: 60px;
    height: 45px;
    font-size: 20px;
  }

  @media (max-width: 400px) {
    margin-right: 12px;
    min-width: 50px;
    width: 50px;
    height: 40px;
    font-size: 18px;
  }
`;

const CurConvertNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  color: ${({ theme }) => theme.text};

  height: 50px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const CurConvertValueDelimiter = styled.div`
  position: relative;
  width: 4%;
  height: 110px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(215, 220, 228, 0) 0%,
      #d7dce4 52.08%,
      rgba(215, 220, 228, 0) 100%
    );
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 50px;

    &::before {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        rgba(215, 220, 228, 0) 0%,
        #d7dce4 52.08%,
        rgba(215, 220, 228, 0) 100%
      );
    }
  }

  @media (max-width: 480px) {
    height: 38px;
  }
`;

const CurConvertValueTo = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 48%;

  word-break: break-all;

  @media (max-width: 576px) {
    flex-direction: row;
    width: 100%;
  }
`;

const CopyToClipIcon = styled(AiOutlineCopy)`
  position: absolute;
  right: -10px;
  top: -5px;
  width: 14px;
  height: 14px;

  pointer-events: none;

  @media (max-width: 576px) {
    right: -7px;
    top: 1px;
    width: 10px;
    height: 10px;
  }
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
