import React from 'react';
import CryptoRow from './CryptoRow';
import './CryptoTable.css';
import useLiveAssets from '../hooks/useLiveAssets';

function CryptoTable() {
  const { assets, status, error } = useLiveAssets();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="crypto-table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <CryptoRow key={asset.id} index={index} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
