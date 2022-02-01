import { NATIONALITIES_HUMAN_NAME } from "../constants/abbrСurrencies";

export const currencyNationalName = () => {
  const newArray = [];

  for (const key in NATIONALITIES_HUMAN_NAME) {
    if (Object.hasOwnProperty.call(NATIONALITIES_HUMAN_NAME, key)) {
      const element = NATIONALITIES_HUMAN_NAME[key];
      newArray.push({ value: key, label: `${key} - ${element}` });
    }
  }

  return newArray
};