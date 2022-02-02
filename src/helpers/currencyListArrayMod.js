const currencyListArrayMod = (rate, data = {}, array) => {
  const newArray = array.map((itm) =>
    data ? { ...itm, exRates: (rate / data[itm.code]).toFixed(2) } : {}
  );

  return newArray;
};

export default currencyListArrayMod