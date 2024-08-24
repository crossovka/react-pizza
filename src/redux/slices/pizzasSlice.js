import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzas',
	async (params, thunkAPI) => {
		const {
			currentPage,
			itemsPerPage,
			activeCategory,
			sortOptions,
			searchValue,
		} = params;
		const search = searchValue ? `&title=*${searchValue}*` : '';
		const sortBy = sortOptions.sortProperty;
		const category = activeCategory > 0 ? `&category=${activeCategory}` : '';

		try {
			const { data } = await axios.get(
				`https://015079367f53b5d9.mokky.dev/pizzas?page=${currentPage}&limit=${itemsPerPage}${category}&sortBy=${sortBy}${search}`
			);

			if (data.items.length === 0) {
				return thunkAPI.rejectWithValue('Pizzas empty');
			}

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const initialState = {
	pizzas: [],
	isLoading: false,
	totalPages: 1,
	error: null,
	status: 'idle' /* idle | loading | success | error */,
};

const pizzaSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzas.pending, (state) => {
				state.isLoading = true;
				state.status = 'loading';
				state.pizzas = [];
				state.error = null;
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.pizzas = action.payload.items;
				state.totalPages = action.payload.meta.total_pages;
				state.isLoading = false;
				state.status = 'success';
				// console.log(action, 'action fulfilled');
			})
			.addCase(fetchPizzas.rejected, (state, action) => {
				state.pizzas = [];
				state.totalPages = 1;
				state.isLoading = false;
				state.status = 'error';
				// state.error = action.payload || action.error.message;
				// console.log(action, 'action rejected');
			});
	},
});

export default pizzaSlice.reducer;