import {createSlice} from '@reduxjs/toolkit';
import {Item} from '../types';

const initialState: {cart: Item[]} = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;