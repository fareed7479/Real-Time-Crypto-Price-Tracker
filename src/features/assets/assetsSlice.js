import { createSlice } from '@reduxjs/toolkit';

// Initial static asset data with simulated 7-day price data
const initialState = {
  assets: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: '/assets/logos/bitcoin.png',
      price: 30000,
      percent_change_1h: 0.5,
      percent_change_24h: 2.3,
      percent_change_7d: 5.1,
      market_cap: 600000000000,
      volume_24h: 35000000000,
      circulating_supply: 19000000,
      max_supply: 21000000,
      chartData: [29500, 29700, 29850, 30000, 30200, 30500, 30000],
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      logo: '/assets/logos/ethereum.png',
      price: 2000,
      percent_change_1h: -0.2,
      percent_change_24h: 1.5,
      percent_change_7d: 3.8,
      market_cap: 250000000000,
      volume_24h: 20000000000,
      circulating_supply: 115000000,
      max_supply: null,
      chartData: [1950, 1980, 1990, 2000, 2020, 2050, 2000],
    },
    {
      id: 'tether',
      name: 'Tether',
      symbol: 'USDT',
      logo: '/assets/logos/tether.png',
      price: 1,
      percent_change_1h: 0.0,
      percent_change_24h: 0.0,
      percent_change_7d: 0.0,
      market_cap: 62000000000,
      volume_24h: 80000000000,
      circulating_supply: 62000000000,
      max_supply: null,
      chartData: [1, 1, 1, 1, 1, 1, 1],
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      logo: '/assets/logos/cardano.png',
      price: 1.2,
      percent_change_1h: 0.1,
      percent_change_24h: 2.0,
      percent_change_7d: 4.5,
      market_cap: 40000000000,
      volume_24h: 3000000000,
      circulating_supply: 33000000000,
      max_supply: 45000000000,
      chartData: [1.1, 1.15, 1.18, 1.2, 1.22, 1.25, 1.2],
    },
    {
      id: 'ripple',
      name: 'Ripple',
      symbol: 'XRP',
      logo: '/assets/logos/ripple.png',
      price: 0.7,
      percent_change_1h: -0.1,
      percent_change_24h: 1.2,
      percent_change_7d: 3.0,
      market_cap: 32000000000,
      volume_24h: 4000000000,
      circulating_supply: 45000000000,
      max_supply: 100000000000,
      chartData: [0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.7],
    },
  ],
  status: 'idle',
  error: null,
};

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    updateAssetPrice(state, action) {
      const { id, price, percent_change_1h, percent_change_24h, percent_change_7d, volume_24h, chartData } = action.payload;
      const existingAsset = state.assets.find(asset => asset.id === id);
      if (existingAsset) {
        existingAsset.price = price;
        existingAsset.percent_change_1h = percent_change_1h;
        existingAsset.percent_change_24h = percent_change_24h;
        existingAsset.percent_change_7d = percent_change_7d;
        existingAsset.volume_24h = volume_24h;
        if (chartData) {
          existingAsset.chartData = chartData;
        }
      }
    },
  },
});

export const { updateAssetPrice } = assetsSlice.actions;

export const selectAssets = state => state.assets.assets;
export const selectStatus = state => state.assets.status;
export const selectError = state => state.assets.error;

export default assetsSlice.reducer;
