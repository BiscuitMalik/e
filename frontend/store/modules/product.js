import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "services/product.service";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getAllProducts();
  }
);

export const resetCart = () => {
  return {
    type: "products/resetCart", // Action type
  };
};

export const updateCart = () => {
  return {
    type: "products/updateCart", // Action type
  };
};
export const incrementItemCount = (itemId) => {
  return {
    type: "products/incrementItemCount",
    payload: itemId,
  };
};

export const decrementItemCount = (itemId) => {
  return {
    type: "products/decrementItemCount",
    payload: itemId,
  };
};

const initialState = {
  cartCounter: 0,
  products: [],
  carts: [],
  filters: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    applyFilter: (state, action) => {
      const { name, value } = action.payload;
      state.filters = { ...state.filters, [name]: value };
    },
    addToCart: (state, action) => {
      const { item, count } = action.payload;
      state.cartCounter += 1;
      state.carts.push({ item, count });
    },
    resetCart: (state) => {
      state.cartCounter = 0;
      state.carts = [];
    },
    incrementItemCount: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.carts.find(
        (cartItem) => cartItem.item.id === itemId
      );
      if (itemToUpdate) {
        itemToUpdate.count += 1;
        state.cartCounter += 1;
      }
    },
    decrementItemCount: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.carts.find(
        (cartItem) => cartItem.item.id === itemId
      );
      if (itemToUpdate && itemToUpdate.count > 0) {
        itemToUpdate.count -= 1;
        state.cartCounter -= 1;
      }
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.products = [];
    },
  },
});

export const { addToCart, applyFilter } = productSlice.actions;
export default productSlice.reducer;
