import { configureStore } from '@reduxjs/toolkit';
import assetsReducer from './features/assets/assetsSlice';
import assetsLiveReducer from './features/assets/assetsLiveSlice';

const store = configureStore({
  reducer: {
    assets: assetsReducer,
    assetsLive: assetsLiveReducer,
  },
});

export default store;
