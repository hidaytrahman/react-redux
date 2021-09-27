import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {

        /*******ADD TO CART*******/
        addToCart(state, action) {
            const newItem = action.payload;
            console.log('newItem ', newItem);

            const existingItem = state.items.find(item => newItem.id === item.id);

            state.totalQuantity++;

            // if not exist add the item
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1
                });
            } else {

                // or update the existing item quantity and price
                existingItem.quantity++;
                existingItem.totalPrice =  existingItem.totalPrice + newItem.price;
            }

        }
    }
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;