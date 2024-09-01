import { RootState } from "../../store";

export const selectCart = (state: RootState) => state.cart;
export const selectCartProductById = (id: number) => (state: RootState) => state.cart.products.find((obj: CartProduct) => obj.id === id);
// const cartProduct = useSelector((state) =>
// 	state.cart.products.find((obj) => obj.id === id)
// );