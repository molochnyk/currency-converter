import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

import styled from "styled-components";

import TableCrypto from "../Components/Table/TableCrypto";
import InputBase from "../Components/Field/InputBase";

import LoadError from "../containers/LoadError";
import Container from "../layout/Container";

import { fetchCryptoAll } from "../store/features/cryptoSlice";

const CryptoAll = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const filteredСrypto = useMemo(
    () =>
      crypto.cryptoListAll.filter((coin) => {
        return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
      }),
    [crypto.cryptoListAll, searchTerm]
  );

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const onClearInput = () => {
    setSearchTerm("");
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredСrypto.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredСrypto.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredСrypto.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredСrypto]);

  useEffect(() => {
    dispatch(fetchCryptoAll());
  }, [dispatch]);

  return (
    <Container isErrorStatus={crypto.isError} title="Криптовалюты">
      <CryptoMain>
        <CryptoMainHead>
          <LinkGoBack to="/crypto">Назад</LinkGoBack>
        </CryptoMainHead>
        <CryptoFilterBlock>
          <CryptoFilterSearch>
            <InputBase
              label="Найти крипту"
              name="search"
              type="search"
              autoComplete={"off"}
              placeholder="пример bit..."
              value={searchTerm}
              onChange={onChangeSearch}
              onClearInput={onClearInput}
            />
          </CryptoFilterSearch>
        </CryptoFilterBlock>
        <LoadError isLoading={crypto.isLoading} isError={crypto.isError}>
          <TableCryptoWrap>
            <TableCrypto data={currentItems} />
          </TableCryptoWrap>
          <Pagination
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </LoadError>
      </CryptoMain>
    </Container>
  );
};

const CryptoMain = styled.div``;

const CryptoMainHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`;

const LinkGoBack = styled(Link)`
  position: relative;
  margin-left: auto;
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
`;

const CryptoFilterBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CryptoFilterSearch = styled.div`
  width: 50%;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const TableCryptoWrap = styled.div`
  margin-bottom: 30px;
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

const Pagination = styled(ReactPaginate)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;

    margin: 0 5px;

    border-radius: 5px;

    background: ${({ theme }) => theme.greyLight};
    color: ${({ theme }) => theme.textLetter};

    cursor: pointer;

    transition: background 250ms ease-in;

    &:hover {
      background: ${({ theme }) => theme.greyLightHover};
    }

    &.previous {
    }

    &.next {
    }

    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &.selected {
      background: ${({ theme }) => theme.default};
      color: #fff;
    }

    @media (max-width: 480px) {
      display: none;

      &.previous,
      &.next {
        display: flex;
        margin: 0 20px;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    @media (max-width: 576px) {
      width: 22px;
      height: 22px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
      font-size: 18px;
    }
  }
`;

export default CryptoAll;
