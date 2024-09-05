import { CartProduct } from "../redux/slices/cart/types";
import { calculateTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
	const data = localStorage.getItem('cart');
	const products = data ? JSON.parse(data) : [];
	const totalPrice = calculateTotalPrice(products);

	return {
		products: products as CartProduct[],
		totalPrice: totalPrice
	}
}