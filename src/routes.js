import React from "react";
import { Routes, Route } from "react-router-dom";

import CurrencyConverter from "./pages/CurrencyConverter";
import CurrencyList from "./pages/CurrencyList";
import Crypto from "./pages/Crypto";
import CryptoAll from "./pages/CryptoAll";
import NoMatch from "./pages/NoMatch";

const routes = () => {
  return (
    <Routes>
      <Route index element={<CurrencyConverter />} />
      <Route path="list-currencies" element={<CurrencyList />} />
      <Route path="crypto" element={<Crypto />} />
      <Route path="crypto-all" element={<CryptoAll />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default routes;
