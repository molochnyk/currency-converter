import React from "react";
import SelectEl from "react-select";
import styled from "styled-components";

import { currencyNationalName } from "../../helpers/currencyNational";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#111",
  }),
};

const Select = ({ labelText, fromToCurrency, onChangeCurrency }) => {
  return (
    <SelectWrap>
      <SelectLabel>{labelText}</SelectLabel>
      <SelectField
        styles={customStyles}
        options={currencyNationalName()}
        placeholder="Выбрать Валюту"
        value={{ value: fromToCurrency, label: fromToCurrency }}
        menuPlacement="auto"
        onChange={onChangeCurrency}
        isSearchable={false}
        // defaultValue={{ label: fromToCurrency }}
        // setValue={fromToCurrency}
        // defaultMenuIsOpen={true}
      />
    </SelectWrap>
  );
};

const SelectWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SelectLabel = styled.p`
  margin: 0 0 5px 0;
  font-size: 18px;
`;

const SelectField = styled(SelectEl)`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Select;
