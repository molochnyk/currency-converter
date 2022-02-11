import { useState, useEffect } from "react";
import axios from "axios";

const useDataCurrency = () => {
  const [data, setData] = useState(null);
  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.exchangerate.host/latest`
          // `ZAPROS`
        );
        const { rates, success } = res.data;

        if (!success) throw new Error(success);

        setData(rates);
        setRate(rates["UAH"]);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return [rate, data, isLoading, isError];
};

export default useDataCurrency;
