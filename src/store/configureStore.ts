import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import ProductReducer from './ProductReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: ProductReducer,
  },
})