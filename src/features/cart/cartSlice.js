import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
    },

    increaseItemQuantity(state, action) {
      item = state.cart.find(item => item.pizzaId === action.payload);

      item.quantity++;
      item.totoalPrice = item.quantity * item.unitPrice;
    },

    decreaseItemQuantity(state, action) {
      item = state.cart.find(item => item.pizzaId === action.payload);

      item.quantity--;
      item.totoalPrice = item.quantity * item.unitPrice;
    },

    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = state => state.cart.cart;

export const getTotalCartQuantity = state =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = state =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
