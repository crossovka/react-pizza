import { PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../redux/slices/cart/types';


export const findCartProduct = (products: CartProduct[], action: PayloadAction<CartProduct>): CartProduct | undefined =>
	products.find(
		(obj) =>
			obj.id === action.payload.id &&
			obj.type === action.payload.type &&
			obj.size === action.payload.size
	);
