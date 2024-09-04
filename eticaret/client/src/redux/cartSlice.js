import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (findCartItem) {
        findCartItem.sayac = findCartItem.sayac + 1;
      } else {
        state.cartItems.push(action.payload);
      }
      
      state.total += action.payload.price;
    },
    deleteCartItem: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

        if (findCartItem.sayac > 1) {
            findCartItem.sayac = findCartItem.sayac - 1;
        } else {
            state.cartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
            );
            
        }
        state.total -= action.payload.price;

    },
    
    increase: (state, action) => {
        const cartItem = state.cartItems.find(
          (item) => item._id === action.payload._id
        );
        cartItem.sayac += 1;
        state.total += cartItem.price;
      },
      decrease: (state, action) => {
        const cartItem = state.cartItems.find(
          (item) => item._id === action.payload._id
        );
  
        cartItem.sayac -= 1;
        if (cartItem.sayac === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
          );
        }
        state.total -= cartItem.price;
      },
      reset: (state) => {
        state.cartItems = [];
        state.total = 0;
        },
  },
});

export const { addProduct,deleteCartItem,decrease,increase,reset,deleteCartAllItem } = cartSlice.actions;
export default cartSlice.reducer;
