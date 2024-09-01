import { createSlice } from '@reduxjs/toolkit';
import { PizzaSliceState, Status } from './types';
import { fetchPizzas } from './asyncActions';

const initialState: PizzaSliceState = {
	pizzas: [],
	isLoading: false,
	itemsPerPage: 4,
	totalPages: 1,
	error: null,
	status: Status.IDLE,
};

const pizzaSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzas.pending, (state) => {
				state.isLoading = true;
				state.status = Status.LOADING;
				state.pizzas = [];
				state.error = null;
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.pizzas = action.payload.items;
				state.totalPages = action.payload.meta.total_pages;
				state.isLoading = false;
				state.status = Status.SUCCESS;
				// console.log(action, 'action fulfilled');
			})
			.addCase(fetchPizzas.rejected, (state, action) => {
				state.pizzas = [];
				state.totalPages = 1;
				state.isLoading = false;
				state.status = Status.ERROR;
				// state.error = action.payload || action.error.message;
				// console.log(action, 'action rejected');
			});
	},
});

export default pizzaSlice.reducer;
