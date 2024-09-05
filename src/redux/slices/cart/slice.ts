import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, CartSliceState } from './types';

import { findCartProduct } from '../../../utils/findCartProduct';
import { calculateTotalPrice } from '../../../utils/calcTotalPrice';
import { getCartFromLS } from '../../../utils/getCartFromLS';

const {products, totalPrice} = getCartFromLS();

// const initialState: CartSliceState = getCartFromLS();
const initialState: CartSliceState = {
	products,
	totalPrice,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state: CartSliceState, action: PayloadAction<CartProduct>) {
			const findItem = findCartProduct(state.products, action);
			if (findItem) {
				findItem.count++;
			} else {
				state.products.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = calculateTotalPrice(state.products);
		},
		removeProduct(state: CartSliceState, action: PayloadAction<CartProduct>) {
			const findItem = findCartProduct(state.products, action);
			if (findItem) {
				state.totalPrice -= findItem.price * findItem.count;
				state.products = state.products.filter((obj) => obj !== findItem);
			}
		},
		removeCartProduct(state: CartSliceState, action: PayloadAction<CartProduct>) {
			const findItem = findCartProduct(state.products, action);
			if (findItem) {
				findItem.count--;
				state.totalPrice -= findItem.price;
				if (findItem.count === 0) {
					state.products = state.products.filter((obj) => obj !== findItem);
				}
			}
			/**
			 * console.log('action.payload', action.payload);
			 * console.log('action', action);
			 * action: PayloadAction<string>
			 * const findItem = state.products.find((obj)=> obj.id == action.payload);
			 * if (findItem) {
			 * findItem.count--;
			 * }
			 */
		},
		createProducts(state) {
			state.products = [];
		},
		clearProducts(state) {
			state.products = [];
			state.totalPrice = 0;
		},
	},
});

export const { addProduct, removeProduct, removeCartProduct, createProducts, clearProducts} = cartSlice.actions;

export default cartSlice.reducer;