import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filter from './slices/filter/slice';
import cart from './slices/cart/slice';
import pizzas from './slices/pizzas/slice';

export const store = configureStore({
	reducer: {
		filter,
		cart,
		pizzas,
	},
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// console.log('store', store);
// console.log('store.getState', store.getState());
// console.log('store.dispatch', store.dispatch);