import { useState, useEffect } from "react";
import axios from "axios";

const useDataCurrency = (fromCurrency, toCurrency, amount) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        if (amount) {
          setIsLoading(true);
          const res = await axios.get(
            `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
            // `ZAPROS`
          );
          const { result, success } = res.data;

          if (!success) throw new Error(success);

          setData(result);
          setIsError(false);
        } else {
          setData(0);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [fromCurrency, toCurrency, amount]);

  return [data, isLoading, isError];
};

export default useDataCurrency;
