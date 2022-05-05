import React from "react";

import styled from "styled-components";

import LoadError from "../containers/LoadError";
import Container from "../layout/Container";

const Crypto = () => {
  return (
    <Container isErrorStatus={false} title="Криптовалюты">
      <CryptoMain>
        <LoadError isLoading={false} isError={false}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint
          eligendi, quo magnam autem praesentium corrupti quas recusandae beatae
          ratione numquam sit officia pariatur nobis rerum, officiis vero
          placeat dolor.
        </LoadError>
      </CryptoMain>
    </Container>
  );
};

const CryptoMain = styled.div``;

export default Crypto;
