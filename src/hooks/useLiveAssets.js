import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, selectStatus, selectError, updateAssetPrice } from '../features/assets/assetsSlice';

function getRandomChange(value, maxPercent = 5) {
  const changePercent = (Math.random() * 2 - 1) * maxPercent; // random between -maxPercent and +maxPercent
  return +(value * (1 + changePercent / 100)).toFixed(2);
}

function getRandomChartData(basePrice) {
  const data = [];
  let price = basePrice;
  for (let i = 0; i < 7; i++) {
    price = getRandomChange(price, 3);
    data.push(price);
  }
  return data;
}

export default function useLiveAssets() {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    const interval = setInterval(() => {
      assets.forEach(asset => {
        const newPrice = getRandomChange(asset.price, 2);
        const newPercent1h = +(Math.random() * 4 - 2).toFixed(2);
        const newPercent24h = +(Math.random() * 10 - 5).toFixed(2);
        const newPercent7d = +(Math.random() * 15 - 7.5).toFixed(2);
        const newVolume24h = getRandomChange(asset.volume_24h, 10);
        const newChartData = getRandomChartData(newPrice);

        dispatch(updateAssetPrice({
          id: asset.id,
          price: newPrice,
          percent_change_1h: newPercent1h,
          percent_change_24h: newPercent24h,
          percent_change_7d: newPercent7d,
          volume_24h: newVolume24h,
          chartData: newChartData,
        }));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return { assets, status, error };
}
