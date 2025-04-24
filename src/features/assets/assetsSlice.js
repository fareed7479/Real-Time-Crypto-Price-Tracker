import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 'bitcoin',
      logo: '/assets/logos/bitcoin.png',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 30000,
      percent_change_1h: 0.5,
      percent_change_24h: 2.3,
      percent_change_7d: 5.1,
      market_cap: 600000000000,
      volume_24h: 35000000000,
      circulating_supply: 19000000,
      max_supply: 21000000,
      chartUrl: 'https://www.tradingview.com/x/yaaO4MOY/'
    },
    {
      id: 'ethereum',
      logo: '/assets/logos/ethereum.png',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2000,
      percent_change_1h: -0.3,
      percent_change_24h: 1.2,
      percent_change_7d: 3.4,
      market_cap: 250000000000,
      volume_24h: 20000000000,
      circulating_supply: 115000000,
      max_supply: null,
      chartUrl: 'https://www.tradingview.com/x/JqXhTwCg/'
    },
    {
      id: 'tether',
      logo: '/assets/logos/tether.png',
      name: 'Tether',
      symbol: 'USDT',
      price: 1,
      percent_change_1h: 0.0,
      percent_change_24h: 0.0,
      percent_change_7d: 0.0,
      market_cap: 62000000000,
      volume_24h: 80000000000,
      circulating_supply: 62000000000,
      max_supply: null,
      chartUrl: 'https://www.tradingview.com/x/KkMijzgb/'
    },
    {
      id: 'cardano',
      logo: '/assets/logos/cardano.png',
      name: 'Cardano',
      symbol: 'ADA',
      price: 1.2,
      percent_change_1h: 0.1,
      percent_change_24h: 2.0,
      percent_change_7d: 4.5,
      market_cap: 40000000000,
      volume_24h: 3000000000,
      circulating_supply: 32000000000,
      max_supply: 45000000000,
      chartUrl: 'https://www.tradingview.com/x/9udxPCAC/'
    },
    {
      id: 'ripple',
      logo: '/assets/logos/ripple.png',
      name: 'Ripple',
      symbol: 'XRP',
      price: 0.7,
      percent_change_1h: -0.2,
      percent_change_24h: 1.5,
      percent_change_7d: 3.0,
      market_cap: 35000000000,
      volume_24h: 2500000000,
      circulating_supply: 46000000000,
      max_supply: 100000000000,
      chartUrl: 'https://www.tradingview.com/x/CkBsDrRZ/'
    }
  ]
};

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    updateAsset(state, action) {
      const { id, changes } = action.payload;
      const asset = state.assets.find(a => a.id === id);
      if (asset) {
        Object.assign(asset, changes);
      }
    }
  }
});

export const { updateAsset } = assetsSlice.actions;

export const selectAssets = state => state.assets.assets;

export default assetsSlice.reducer;
