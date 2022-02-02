import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Table from "../Components/Table/Table";
import LoadError from "../containers/LoadError";

import { CURRENCIES_LISTS } from "../constants/abbrСurrencies";

import useDataCurrency from "../hooks/useDataListCurrency";

import currencyListArrayMod from "../helpers/currencyListArrayMod";

const CurrencyList = () => {
  const [dataView, setDataView] = useState([]);

  const [rate, data, isLoading, isError] = useDataCurrency();

  useEffect(() => {
    const resultData = currencyListArrayMod(rate, data, CURRENCIES_LISTS);
    setDataView(resultData);
  }, [rate, data]);

  return (
    <CurConvertWrap errorStatus={isError ? "error" : "default"}>
      <CurConvertHeadSupTitle>Курс валют</CurConvertHeadSupTitle>
      <CurConvertList>
        <LoadError isLoading={isLoading} isError={isError}>
          <Table data={dataView} />
        </LoadError>
      </CurConvertList>
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

const CurConvertHeadSupTitle = styled.h1`
  margin: 10px 0 20px;
  font-size: 22px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-weight: 100;
`;

const CurConvertList = styled.div``;

export default CurrencyList;
