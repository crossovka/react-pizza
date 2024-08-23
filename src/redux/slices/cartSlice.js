import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	products: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state, action) {
			const findItem = state.products.find(
				(obj) =>
					obj.id === action.payload.id &&
					obj.type === action.payload.type &&
					obj.size === action.payload.size
			);

			if (findItem) {
				findItem.count++;
			} else {
				state.products.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = state.products.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0);
		},
		removeProduct(state, action) {
			const itemToRemove = state.products.find(
				(obj) =>
					obj.id === action.payload.id &&
					obj.type === action.payload.type &&
					obj.size === action.payload.size
			);
			if (itemToRemove) {
				state.totalPrice -= itemToRemove.price * itemToRemove.count;
				state.products = state.products.filter(
					(obj) =>
						!(
							obj.id === action.payload.id &&
							obj.type === action.payload.type &&
							obj.size === action.payload.size
						)
				);
			}
		},
		removeCartProduct(state, action) {
			const findItem = state.products.find(
				(obj) =>
					obj.id === action.payload.id &&
					obj.type === action.payload.type &&
					obj.size === action.payload.size
			);
			if (findItem) {
				findItem.count--;
				state.totalPrice -= findItem.price;
				if (findItem.count === 0) {
					state.products = state.products.filter(
						(obj) =>
							obj.id !== action.payload.id ||
							obj.type !== action.payload.type ||
							obj.size !== action.payload.size
					);
				}
			}
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

export const {
	addProduct,
	removeProduct,
	removeCartProduct,
	createProducts,
	clearProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
