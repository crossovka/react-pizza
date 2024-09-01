export type CartProduct = {
	id: number;
	imgUrl: string;
	title: string;
	type: string;
	size: number;
	count: number;
	// count?: number;
	price: number;
}

export interface CartSliceState {
	totalPrice: number;
	products: CartProduct[];
}