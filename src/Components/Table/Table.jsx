import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { useTable, useSortBy } from 'react-table';
// import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { TbArrowsSort, TbSortAscending2, TbSortDescending2 } from 'react-icons/tb';

const initialColumns = [
  {
    Header: 'Флаг',
    accessor: 'icon',
    disableSortBy: true,
  },
  {
    Header: 'Валюта',
    accessor: 'codeName',
    disableSortBy: false,
  },
  {
    Header: 'Покупка',
    accessor: 'exRates',
    disableSortBy: false,
  },
];

const Table = ({ data }) => {
  const dataTable = useMemo(() => data, [data]);
  const columnsTable = useMemo(() => initialColumns, []);
  const tableInstance = useTable({ columns: columnsTable, data: dataTable }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <TableWrap {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {!column.disableSortBy ? (
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TbSortAscending2 />
                      ) : (
                        <TbSortDescending2 />
                      )
                    ) : (
                      <TbArrowsSort />
                    )}
                  </span>
                ) : (
                  ''
                )}
              </th>
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
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
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

    span {
      position: relative;
      margin-left: 2px;
      svg {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
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

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
