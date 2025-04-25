import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slice/crpytoSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});