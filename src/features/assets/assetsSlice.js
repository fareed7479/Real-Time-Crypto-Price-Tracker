import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAssetsFromCoinGecko } from './assetsAPI';

export const fetchAssetsData = createAsyncThunk(
  'assets/fetchAssetsData',
  async () => {
    return await fetchAssetsFromCoinGecko();
  }
);

const initialState = {
  assets: [],
  status: 'idle',
  error: null
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAssetsData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAssetsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.assets = action.payload;
      })
      .addCase(fetchAssetsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { updateAsset } = assetsSlice.actions;

export const selectAssets = state => state.assets.assets;
export const selectStatus = state => state.assets.status;
export const selectError = state => state.assets.error;

export default assetsSlice.reducer;