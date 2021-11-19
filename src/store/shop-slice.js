import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState:{
        products: [],
        categories: [],
        cartItems: [],
        totalAmount: 0
    },
    reducers: {
        replaceProducts(state, action){
            state.products = action.payload;
        },
        replaceCategories(state, action){
            state.categories = action.payload
        },
        addToCartItems(state, action){
            state.totalAmount = state.totalAmount + action.payload.item.price;

            const existingCartItemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.item.id
              );
            
            const existingCartItem = state.cartItems[existingCartItemIndex];

            let updatedItems;

            if(existingCartItem){
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.item.amount,
                    quantity: existingCartItem.quantity++
                };
                updatedItems = [...state.cartItems];
                updatedItems[existingCartItem] = updatedItem;
            } else{
                updatedItems = state.cartItems.concat(action.payload.item);
            }

            state.cartItems = updatedItems;

            // const updatedItems;
            // updatedItems = [...state.cartItems];
            // updatedItems.push(action.payload.item);
            // state.cartItems = updatedItems;
            
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice;