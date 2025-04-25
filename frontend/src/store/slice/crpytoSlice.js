import { createSlice } from '@reduxjs/toolkit';
import { initialCryptoData } from '../../data/initalData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: initialCryptoData,
    loading: false,
    error: null,
  },
  reducers: {
    updateAssetPrice: (state, action) => {
      const { id, price, percentChange1h, percentChange24h, percentChange7d, volume24h } = action.payload;
      const asset = state.assets.find(asset => asset.id === id);
      if (asset) {
        asset.previousPrice = asset.price;
        asset.price = price;
        asset.percentChange1h = percentChange1h;
        asset.percentChange24h = percentChange24h;
        asset.percentChange7d = percentChange7d;
        asset.volume24h = volume24h;
        asset.priceChange = price > asset.previousPrice ? 'increase' : price < asset.previousPrice ? 'decrease' : 'none';
      }
    },
    startFetchCrypto: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCryptoSuccess: (state, action) => {
      state.assets = action.payload;
      state.loading = false;
    },
    fetchCryptoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  updateAssetPrice, 
  startFetchCrypto, 
  fetchCryptoSuccess, 
  fetchCryptoFailure 
} = cryptoSlice.actions;

// Selectors
export const selectAllAssets = state => state.crypto.assets;
export const selectAssetById = (state, id) => state.crypto.assets.find(asset => asset.id === id);
export const selectLoading = state => state.crypto.loading;
export const selectError = state => state.crypto.error;

export default cryptoSlice.reducer;