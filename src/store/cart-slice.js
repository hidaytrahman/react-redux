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
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },

        removeFromCart(state, action) {
            const id = action.payload;

            const existingItem = state.items.find(item => id === item.id);
            state.totalQuantity--;

            // check if the current quantity is one and remove item from the cart list
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                // else just decrease the quantity and the price
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;