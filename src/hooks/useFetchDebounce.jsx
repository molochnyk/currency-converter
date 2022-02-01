import { useState } from "react";
import { useDebounce } from "react-use";
import useDataCurrency from "../hooks/useDataCurrency";

const useFetchDebounce = (fromCurrency, toCurrency, amount) => {
  const [debouncedAmount, setDebouncedAmount] = useState(amount);

  useDebounce(
    () => {
      setDebouncedAmount(amount);
    },
    500,
    [amount]
  );

  const [data, isLoading, isError] = useDataCurrency(
    fromCurrency,
    toCurrency,
    debouncedAmount
  );

  return [data, isLoading, isError];
};

export default useFetchDebounce;
