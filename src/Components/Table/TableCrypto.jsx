import React from "react";
import PropTypes from "prop-types";
import millify from "millify";
import styled from "styled-components";

const titleTable = [
  {
    title: "#",
    accessor: "count",
  },
  {
    title: "Имя",
    accessor: "name",
  },
  {
    title: "Цена",
    accessor: "price",
  },
  {
    title: "Рыночаня капитализавция",
    accessor: "marketcapitalization",
  },
  {
    title: "24ч %",
    accessor: "pchangepercentage_24h",
  },
];

const TableCrypto = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          {titleTable.map((itm) => {
            return <th key={itm.accessor}>{itm.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((itm, i) => {
          return (
            <tr key={itm.id}>
              <td>{i + 1}</td>
              <td>
                <img src={itm.image.thumb} alt={itm.name} />
                <div>
                  <div>{itm.name}</div>
                  <div>{itm.symbol}</div>
                </div>
              </td>
              <td>$ {millify(itm.market_data.current_price.usd)}</td>
              <td>$ {millify(itm.market_data.market_cap.usd)}</td>
              <td>{millify(itm.market_data.price_change_percentage_24h)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;

  border-spacing: 0;

  thead {
    background: ${({ theme }) => theme.tableThead};
  }

  tr {
  }

  th {
    text-align: left;
    padding: 8px;
    color: ${({ theme }) => theme.text};
  }

  tbody {
  }

  tr {
  }

  td {
    padding: 10px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.tableBorder};

    &:nth-child(2) {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }

      div {
        &:nth-child(1) {
          margin-bottom: 2px;
          font-size: 18px;
        }
        &:nth-child(2) {
          font-size: 13px;
        }
      }
    }
  }
`;

TableCrypto.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableCrypto;
