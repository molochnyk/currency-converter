import React from "react";

import Spinner from "../Components/Spinner/Spinner";
import Error from "../Components/Error/Error";

const LoadError = ({ isLoading, isError, children }) => {
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return <>{children}</>;
};

export default LoadError;
