import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentProduct: null,
};

const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { setCurrentProduct } = currentProductSlice.actions;

export default currentProductSlice.reducer;
