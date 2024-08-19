import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import sortReducer from './slices/sortSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
	reducer: {
		filterSlice: filterReducer,
		sortSlice: sortReducer,
		searchSlice: searchReducer,
	},
});
