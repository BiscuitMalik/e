import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './modules/common'
import authReducer from './modules/auth'
import productsReducer from './modules/product'

import { cartReducer } from './modules/cartReducer'

let initialState = {
    cart: {
      cartItems: typeof localStorage !== "undefined" ? (localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []) : []
    }
  };

  
export const store = configureStore({
    reducer: {
        'auth': authReducer,
        'common': commonReducer,
        'products': productsReducer,
        'cart' : cartReducer,
    },
    preloadedState: initialState, // Initialize the store with the initial state

})
