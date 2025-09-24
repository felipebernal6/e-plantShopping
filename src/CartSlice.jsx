import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log(`adding item to cart: ${action.payload.name}`);

      if (!state.items.some(item => item.sku === action.payload.sku)) {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
        console.log(`item added to cart: ${newItem.name}: ${newItem.quantity}`);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.sku !== action.payload.sku);
      console.log(`removing item from cart: ${action.payload.name}`);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.sku === action.payload.sku);
      if (item) {
        item.quantity = action.payload.quantity;
        console.log(`quantity updated for item: ${action.payload.name}: ${item.quantity}`);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
