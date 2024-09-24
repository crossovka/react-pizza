import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { FetchPizzasArgs, Pizza } from './types';

export const fetchPizzas = createAsyncThunk<
{ items: Pizza[], meta: { total_pages: number } },
	FetchPizzasArgs
>(
	'pizzas/fetchPizzas',
	async (params, thunkAPI) => {
		const { currentPage, itemsPerPage, activeCategory, sortOption, searchValue } = params;

		const search = searchValue ? `&title=*${searchValue}*` : '';
		const sortBy = sortOption.sortProperty;
		const category = activeCategory > 0 ? `&category=${activeCategory}` : '';

		try {
			const { data } = await axios.get<{ items: Pizza[], meta: { total_pages: number } }>(
				`https://015079367f53b5d9.mokky.dev/pizzas?page=${currentPage}&limit=${itemsPerPage}${category}&sortBy=${sortBy}${search}`
			);

			if (data.items.length === 0) {
				return thunkAPI.rejectWithValue('Pizzas empty');
			}

			return { items: data.items, meta: data.meta };
		} catch (error) {
			return thunkAPI.rejectWithValue((error as Error).message);
		}
	}
);
