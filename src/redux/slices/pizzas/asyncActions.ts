import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { SortPropertyEnum } from '../filter/types';
import { Pizza } from './types';

interface FetchPizzasResponse {
  items: Pizza[];
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
}

interface FetchPizzasArgs {
	currentPage: number;
	itemsPerPage: number;
	activeCategory: number;
	// FIX name то тоже передаётся почему-то
	sortOption: { sortProperty: SortPropertyEnum };
	searchValue?: string;
}

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>(
	'pizzas/fetchPizzas',
	async (params, thunkAPI) => {
		// itemsPerPage = params.itemsPerPage || 4,
		const { currentPage, itemsPerPage, activeCategory, sortOption, searchValue} = params;
		// console.log('params', params);

		const search = searchValue ? `&title=*${searchValue}*` : '';
		const sortBy = sortOption.sortProperty;
		const category = activeCategory > 0 ? `&category=${activeCategory}` : '';

		try {
			const { data } = await axios.get<FetchPizzasResponse>(`https://015079367f53b5d9.mokky.dev/pizzas?page=${currentPage}&limit=${itemsPerPage}${category}&sortBy=${sortBy}${search}`);

			data.items.length === 0 && thunkAPI.rejectWithValue('Pizzas empty');

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);