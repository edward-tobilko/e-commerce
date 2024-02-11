import { createSlice } from "@reduxjs/toolkit";

// state
const initialState = {
  productInCart: [],
  totalAmount: 0,
  totalCount: 0,
};

const productInCartSlice = createSlice({
  name: "productInCart",
  initialState,
  reducers: {
    setProductInCart: (state, action) => {
      state.productInCart.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.productInCart = state.productInCart.filter(
        (product) => product.id !== action.payload,
      );
    },
    decrease: (state, action) => {
      state.productInCart = state.productInCart.map((item) => {
        if (item.id === action.payload && item.amount > 0) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    },
    increase: (state, action) => {
      state.productInCart = state.productInCart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.productInCart.reduce(
        (cartTotal, cartItem) => {
          const { TotalAmount, amount } = cartItem;
          const itemTotal = TotalAmount * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        },
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
  },
});

export default productInCartSlice.reducer;

export const {
  setProductInCart,
  removeProductFromCart,
  decrease,
  increase,
  getCartTotal,
} = productInCartSlice.actions;
