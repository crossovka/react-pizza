import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SortItemType, SortPropertyEnum } from './types';

import {sortList} from '../../../constants/';

const initialState: FilterSliceState = {
	activeCategory: 0,
	searchValue: '',
	// sortOption: { name: 'популярности (Asc)', sortProperty: SortPropertyEnum.RATING_ASC },
	sortOption: sortList[0],
	currentPage: 1,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setActiveCategory(state, action: PayloadAction<number>) {
			state.activeCategory = action.payload;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
		setActiveSortType(state, action: PayloadAction<SortItemType>) {
			state.sortOption = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setFilters(state, action: PayloadAction<FilterSliceState>) {
			// if (Object.keys(action.payload).length > 0) {
			// 	state.sortOption = action.payload.sortOption;
			// 	state.activeCategory = Number(action.payload.activeCategory);
			// 	state.currentPage = Number(action.payload.currentPage);
			// } else {
			// 	state = initialState;
			// }
			state.sortOption = action.payload.sortOption;
			state.activeCategory = Number(action.payload.activeCategory);
			state.currentPage = Number(action.payload.currentPage);
		},
	},
});

export const {
	setActiveCategory,
	setSearchValue,
	setActiveSortType,
	setCurrentPage,
	setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;