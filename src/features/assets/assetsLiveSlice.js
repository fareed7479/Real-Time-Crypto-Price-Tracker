import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAssetsFromCoinGecko } from './assetsAPI';

export const fetchLiveAssetsData = createAsyncThunk(
  'assetsLive/fetchLiveAssetsData',
  async () => {
    return await fetchAssetsFromCoinGecko();
  }
);

const initialState = {
  assets: [],
  status: 'idle',
  error: null
};

const assetsLiveSlice = createSlice({
  name: 'assetsLive',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLiveAssetsData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchLiveAssetsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.assets = action.payload;
      })
      .addCase(fetchLiveAssetsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectLiveAssets = state => state.assetsLive.assets;
export const selectLiveStatus = state => state.assetsLive.status;
export const selectLiveError = state => state.assetsLive.error;

export default assetsLiveSlice.reducer;
