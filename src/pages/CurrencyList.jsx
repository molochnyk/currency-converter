import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Table from '../Components/Table/Table';
import LoadError from '../containers/LoadError';
import Container from '../layout/Container';

import { CURRENCIES_LISTS } from '../constants/abbreviations';

import useDataCurrency from '../hooks/useDataListCurrency';

import currencyListArrayMod from '../helpers/currencyListArrayMod';

const CurrencyList = () => {
  const [dataView, setDataView] = useState([]);

  const [rate, data, isLoading, isError] = useDataCurrency();

  useEffect(() => {
    const resultData = currencyListArrayMod(rate, data, CURRENCIES_LISTS);
    setDataView(resultData);
  }, [rate, data]);

  return (
    <Container isErrorStatus={isError} title="Курс валют">
      <CurConvertList>
        <LoadError isLoading={isLoading} isError={isError}>
          <Table data={dataView} />
        </LoadError>
      </CurConvertList>
    </Container>
  );
};

const CurConvertList = styled.div``;

export default CurrencyList;
