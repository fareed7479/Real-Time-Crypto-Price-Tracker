import React from 'react';
import Chart from './Chart';
import './CryptoRow.css';

function formatNumberApprox(num) {
  if (num === null || num === undefined) return '-';
  if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return num.toString();
}

function formatNumberWithCommas(num) {
  if (num === null || num === undefined) return '-';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function PercentChange({ value }) {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const className = isPositive ? 'green' : isNegative ? 'red' : '';
  return (
    <span className={className}>
      {isPositive && <span className="arrow up">▲</span>}
      {isNegative && <span className="arrow down">▼</span>}
      {value.toFixed(2)}%
    </span>
  );
}

function PriceChange({ value }) {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const className = isPositive ? 'green' : isNegative ? 'red' : '';
  return (
    <span className={className}>
      ${value.toFixed(2)}
    </span>
  );
}

function CryptoRow({ index, asset }) {
  return (
    <tr className="crypto-row">
      <td>{index + 1}</td>
      <td className="name-cell">
        <div className="token-cell">
          <img src={asset.logo} alt={asset.name} width="24" height="24" />
          <span>{asset.name} <span className="token-symbol">({asset.symbol})</span></span>
      </div>
      </td>
      <td><PriceChange value={asset.price} /></td>
      <td><PercentChange value={asset.percent_change_1h} /></td>
      <td><PercentChange value={asset.percent_change_24h} /></td>
      <td><PercentChange value={asset.percent_change_7d} /></td>
      <td>${formatNumberWithCommas(asset.market_cap)}</td>
      <td>${formatNumberWithCommas(asset.volume_24h)}</td>
      <td>{formatNumberApprox(asset.circulating_supply)} {asset.symbol}</td>
      <td><Chart chartUrl={asset.chartUrl} /></td>
    </tr>
  );
}

export default CryptoRow;
