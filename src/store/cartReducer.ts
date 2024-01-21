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
    removeItem: (state, action) => {
      delete state.cart[action.payload.id];
    },
    increaseQuantity: (state, action) => {
      state.cart[action.payload.id].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      state.cart[action.payload.id].quantity -= 1;
    },
    editQuantity: (state, action) => {
      state.cart[action.payload.id].quantity = action.payload.quantity;
    },
  },
});

export const {addItem, increaseQuantity, decreaseQuantity, editQuantity, removeItem} = cartSlice.actions;
export default cartSlice.reducer;