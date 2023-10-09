import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from 'services/product.service';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return await getAllProducts()
    }
)

const initialState = {
    cartCounter: 0,
    products: [],
    carts: [],
    filters: {},
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        applyFilter: (state, action) => {
            const { name, value } = action.payload
            state.filters = { ...state.filters, [name]: value }
        },
        addToCart: (state, action) => {
            // Increment the cartCounter by 1
            state.cartCounter += 1;
      
            // Add the payload (an object) to the carts array
            state.carts.push(action.payload);
          },
        resetCart: (state) => {
        state.cartCounter = 0;
        state.carts = [];
        },
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.products = []
        },
    }
})

export const { addToCart, applyFilter } = productSlice.actions
export default productSlice.reducer