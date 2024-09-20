import { PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../redux/slices/cart/types';

export const findCartProduct = (
	products: CartProduct[],
	action: PayloadAction<CartProduct>
): CartProduct | undefined => {
	return products.find(
		(product) =>
			product.id === action.payload.id &&
			product.type === action.payload.type &&
			product.size === action.payload.size
	);
};