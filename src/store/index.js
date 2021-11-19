import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import productSlice from "./shop-slice";


const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;