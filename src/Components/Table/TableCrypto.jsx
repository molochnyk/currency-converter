import React from 'react';
import PropTypes from 'prop-types';
import millify from 'millify';
import styled from 'styled-components';
import { numberWithCommas } from '../../helpers/numberWithCommas';

const titleTable = [
  {
    title: '#',
    accessor: 'count',
  },
  {
    title: 'Имя',
    accessor: 'name',
  },
  {
    title: 'Цена',
    accessor: 'price',
  },
  {
    title: 'Рыночаня капитализавция',
    accessor: 'marketcapitalization',
  },
  {
    title: '24ч %',
    accessor: 'pchangepercentage_24h',
  },
];

const TableCrypto = ({ data }) => {
  return (
    <Table>
      <THead>
        <TTR>
          {titleTable.map((itm) => {
            return <TTH key={itm.accessor}>{itm.title}</TTH>;
          })}
        </TTR>
      </THead>
      <TBody>
        {data.length > 0 ? (
          data.map((itm, i) => {
            const profit = itm.market_data.price_change_percentage_24h >= 0;

            return (
              <TTR key={itm.id}>
                <TTD>{i + 1}</TTD>
                <TTD>
                  <img src={itm.image.thumb} alt={itm.name} />
                  <div>
                    <div>{itm.name}</div>
                    <div>{itm.symbol}</div>
                  </div>
                </TTD>
                <TTD>$ {millify(itm.market_data.current_price.usd)}</TTD>
                <TTD>$ {millify(itm.market_data.market_cap.usd)}</TTD>
                <TTD profit={!!profit}>
                  {profit && '+'}
                  {numberWithCommas(itm.market_data.price_change_percentage_24h.toFixed(2))}
                </TTD>
              </TTR>
            );
          })
        ) : (
          <TTR>
            <TTDEMPTY>Ничего не нашло 😥</TTDEMPTY>
          </TTR>
        )}
      </TBody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const THead = styled.thead`
  background: ${({ theme }) => theme.tableThead};
`;

const TTR = styled.tr``;

const TTH = styled.th`
  text-align: left;
  padding: 8px;
  color: ${({ theme }) => theme.text};
`;

const TBody = styled.tbody``;

const TTD = styled.td`
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

  &:nth-child(5) {
  }

  &:nth-child(5) {
    color: ${({ profit, theme }) => (profit > 0 ? theme.upColor : theme.downColor)};
  }
`;

const TTDEMPTY = styled(TTD).attrs({
  colSpan: 5,
})`
  text-align: center;
  padding: 20px 8px;
  font-size: 20px;
`;

TableCrypto.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableCrypto;
