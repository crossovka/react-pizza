import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeCategory: 0,
	searchValue: '',
	sortOptions: { name: 'популярности (Asc)', sortProperty: 'rating' },
	currentPage: 1,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setActiveCategory(state, action) {
			state.activeCategory = action.payload;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
		setActiveSortType(state, action) {
			state.sortOptions = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
});

export const {
	setActiveCategory,
	setSearchValue,
	setActiveSortType,
	setCurrentPage,
} = filterSlice.actions;

export default filterSlice.reducer;
