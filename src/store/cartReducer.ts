import {createSlice} from '@reduxjs/toolkit';
import {CartItem} from '../types';

const initialState: {cart: CartItem} = {
  cart: {},
}

export const cartSlice = createSlice({
  name: 'cartHandler',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart[action.payload.id] = {quantity: action.payload.quantity};
    },
    increaseQuantity: (state, action) => {
      state.cart[action.payload.id].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      state.cart[action.payload.id].quantity -= 1;
    },
  },
});

export const {addItem, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;