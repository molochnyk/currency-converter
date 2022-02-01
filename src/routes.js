import React from "react";
import { Routes, Route } from "react-router-dom";

import CurrencyConverter from "./pages/CurrencyConverter";
import CurrencyList from "./pages/CurrencyList";

const routes = () => {
  return (
    <Routes>
      <Route index element={<CurrencyConverter />} />
      <Route path="list-currencies" element={<CurrencyList />} />
    </Routes>
  );
};

export default routes;
