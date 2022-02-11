import React from "react";
import { Routes, Route } from "react-router-dom";

import CurrencyConverter from "./pages/CurrencyConverter";
import CurrencyList from "./pages/CurrencyList";
import NoMatch from "./pages/NoMatch";

const routes = () => {
  return (
    <Routes>
      <Route index element={<CurrencyConverter />} />
      <Route path="list-currencies" element={<CurrencyList />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default routes;
