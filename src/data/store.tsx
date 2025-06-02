import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: {id: 1, name: '사용자', job: '사용자의 직업'},
    reducers: {
        changeName(state){
            state.name='변경된 이름';
        },
        increase(state, action){
            state.id += action.payload;
        }
    }
});

const stock = createSlice({
    name: 'stock',
    initialState: [400, 300, 500],
    reducers: {}
});

export interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}
export interface CartArray {
    cart: CartItem[];
}

const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: [
            { id: 0, name: 'Black Myth - Wukong', quantity: 1, price: 66800 },
            { id: 1, name: 'Dragon Quest III - HD-2D Remake', quantity: 2, price: 67800},
        ],
    } as CartArray,
    reducers: {
        plusCount(state, action) {
            state.cart[action.payload].quantity += 1;
        },
        minusCount(state, action) {
            state.cart[action.payload].quantity -= 1;
        }
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
    }
})

export const {changeName, increase} = user.actions;
export const { plusCount, minusCount } = cart.actions;