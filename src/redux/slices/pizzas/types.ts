import { SortPropertyEnum } from "../filter/types";

export type Pizza = {
	id: number;
	imgUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
	description: string;
};

export enum Status {
	IDLE = 'idle',
	LOADING = 'loading',
	SUCCESS = 'completed',
	ERROR = 'error',
}

export interface PizzaSliceState {
	pizzas: Pizza[];
	isLoading: boolean;
	itemsPerPage: number;
	totalPages: number;
	status: Status;
}

export interface FetchPizzasArgs {
	currentPage: number;
	itemsPerPage: number;
	activeCategory: number;
	// FIX name то тоже передаётся почему-то
	sortOption: { sortProperty: SortPropertyEnum };
	searchValue?: string;
}

// interface FetchPizzasResponse {
//   items: Pizza[];
//   meta: {
//     total_items: number;
//     total_pages: number;
//     current_page: number;
//     per_page: number;
//     remaining_count: number;
//   };
// }