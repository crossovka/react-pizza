import { configureStore } from '@reduxjs/toolkit';
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
// console.log('store.getState', store.getState());
// console.log('store', store);
// export type AppDispatch = typeof store.dispatch;