import { CartProduct } from "../redux/slices/cart/types";

export const calculateTotalPrice = (products: CartProduct[]): number =>
  products.reduce((sum, obj) => obj.price * obj.count + sum, 0);