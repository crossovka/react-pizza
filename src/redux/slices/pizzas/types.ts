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
	error: null | string;
	status: Status;
}