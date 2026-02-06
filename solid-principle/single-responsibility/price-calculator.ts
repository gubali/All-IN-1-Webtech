import { Product } from "./Order";
export class PriceCalculator {
  calCulatePrice(products: Product[]) {
    return products.reduce((total, product) => total + (product.price ?? 0), 0);
  }
}
