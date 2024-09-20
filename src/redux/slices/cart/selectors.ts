import { RootState } from "../../store";
import { CartProduct } from "./types";

export const selectCart = (state: RootState) => state.cart;

export const selectCartProductsById = (id: number) => (state: RootState) =>
	state.cart.products.filter((product: CartProduct) => product.id === id);