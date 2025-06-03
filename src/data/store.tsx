import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
        cart: [],
    } as CartArray,
    reducers: {
        plusCount(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        minusCount(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
        addItem(state, action) {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    quantity: 1,
                    price: action.payload.price,
                });
            }
        },
        resetCart(state) {
            state.cart = [];
        },
    }
})

export const {changeName, increase} = user.actions;
export const { plusCount, minusCount, addItem, resetCart } = cart.actions;

const rootReducer = combineReducers({
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
