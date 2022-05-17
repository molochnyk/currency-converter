import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import TableCrypto from "../Components/Table/TableCrypto";

import LoadError from "../containers/LoadError";
import Container from "../layout/Container";

import { fetchCrypto } from "../store/features/cryptoSlice";

const Crypto = () => {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto(10));
  }, [dispatch]);

  return (
    <Container isErrorStatus={crypto.isError} title="Криптовалюты">
      <CryptoMain>
        <CryptoMainHead>
          <TittleHead>Топ 10 крипто в мире</TittleHead>
          <LinkSeeAll to="/crypto-all">Посмотреть все</LinkSeeAll>
        </CryptoMainHead>
        <LoadError isLoading={crypto.isLoading} isError={crypto.isError}>
          <TableCryptoWrap>
            <TableCrypto data={crypto.cryptoList} />
          </TableCryptoWrap>
        </LoadError>
      </CryptoMain>
    </Container>
  );
};

const CryptoMain = styled.div``;

const CryptoMainHead = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const TittleHead = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 100;
  color: ${({ theme }) => theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    margin-bottom: 12px;
  }
`;

const TableCryptoWrap = styled.div`
  @media (max-width: 576px) {
    overflow-x: auto;

    table {
      width: 590px;

      tr {
        th {
          &:nth-child(1) {
            width: 38px;
          }
          &:nth-child(2) {
            width: 160px;
          }
          &:nth-child(3) {
            width: 100px;
          }
          &:nth-child(4) {
            width: 100px;
          }
          &:nth-child(5) {
            width: 60px;
          }
        }
      }
    }
  }
`;

const LinkSeeAll = styled(Link)`
  position: relative;
  font-size: 18px;
  font-weight: 100;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.default};
    transition: all 250ms ease;
  }

  &:hover {
    &::before {
      opacity: 0;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    font-size: 13px;
    align-self: flex-end;
  }
`;

export default Crypto;
