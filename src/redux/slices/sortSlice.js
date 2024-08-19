import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sortOptions: { name: 'популярности (Asc)', sortProperty: 'rating' },
};

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setActiveSortType(state, action) {
			state.sortOptions = action.payload;
		},
	},
});

export const { setActiveSortType } = sortSlice.actions;

export default sortSlice.reducer;
