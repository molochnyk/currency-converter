import React, { useMemo } from "react";
import styled from "styled-components";

import { useTable } from "react-table";

const initialColumns = [
  {
    Header: "Флаг",
    accessor: "icon",
  },
  {
    Header: "Валюта",
    accessor: "codeName",
  },
  {
    Header: "Покупка",
    accessor: "exRates",
  },
];

const Table = ({ data }) => {
  const dataTable = useMemo(() => data, [data]);
  const columnsTable = useMemo(() => initialColumns, []);
  const tableInstance = useTable({ columns: columnsTable, data: dataTable });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <TableWrap {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </TableWrap>
  );
};

const TableWrap = styled.table`
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

    &:nth-child(1) {
      width: 70px;
      svg {
        height: 24px;
      }
    }
  }
`;

export default Table;
