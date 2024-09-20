export interface CartSliceState {
	totalPrice: number;
	products: CartProduct[];
}

export type CartProduct = {
	id: number;
	imgUrl: string;
	title: string;
	type: string;
	size: number;
	count: number;
	price: number;
}