import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaSliceState, Status, Pizza } from './types';
import { fetchPizzas } from './asyncActions';

const initialState: PizzaSliceState = {
	pizzas: [],
	isLoading: false,
	itemsPerPage: 4,
	totalPages: 1,
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
				// state.pizzas = [];
				state.status = Status.LOADING;
			})
			.addCase(
				fetchPizzas.fulfilled,
				(state, action: PayloadAction<{ items: Pizza[], meta: { total_pages: number } }>) => {
					state.isLoading = false;
					state.pizzas = action.payload.items;
					state.totalPages = action.payload.meta.total_pages;
					state.status = Status.SUCCESS;
				}
			)
			.addCase(fetchPizzas.rejected, (state) => {
				state.isLoading = false;
				state.pizzas = [];
				state.totalPages = 1;
				state.status = Status.ERROR;
			});
	},
});

export default pizzaSlice.reducer;