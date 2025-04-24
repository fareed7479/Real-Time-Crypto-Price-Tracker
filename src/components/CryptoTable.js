import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, updateAsset } from '../features/assets/assetsSlice';
import CryptoRow from './CryptoRow';
import './CryptoTable.css';

function getRandomChange() {
  return (Math.random() * 2 - 1).toFixed(2); // random between -1 and 1
}

function CryptoTable() {
  const assets = useSelector(selectAssets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      assets.forEach((asset) => {
        const priceChange = parseFloat(getRandomChange());
        const percentChange1h = parseFloat(getRandomChange());
        const percentChange24h = parseFloat(getRandomChange());
        const percentChange7d = parseFloat(getRandomChange());
        const volumeChange = parseFloat(getRandomChange()) * 1000000;
        const marketCapChange = parseFloat(getRandomChange()) * 1000000000;
        const circulatingSupplyChange = parseFloat(getRandomChange()) * 100000;

        const newPrice = Math.max(asset.price + priceChange, 0).toFixed(2);
        const newVolume = Math.max(asset.volume_24h + volumeChange, 0).toFixed(0);
        const newMarketCap = Math.max(asset.market_cap + marketCapChange, 0).toFixed(0);
        const newCirculatingSupply = Math.max(asset.circulating_supply + circulatingSupplyChange, 0).toFixed(0);

        dispatch(updateAsset({
          id: asset.id,
          changes: {
            price: parseFloat(newPrice),
            percent_change_1h: percentChange1h,
            percent_change_24h: percentChange24h,
            percent_change_7d: percentChange7d,
            volume_24h: parseInt(newVolume, 10),
            market_cap: parseInt(newMarketCap, 10),
            circulating_supply: parseInt(newCirculatingSupply, 10),
          },
        }));
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

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
