export class Product {
  id: number;
  price: number;
  name: string;
  constructor(id: number, price: number, name: string) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
export class Order {
  products: Product[] = [];
  addProduct(product: Product) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
  removeProduct(productId: number) {
    this.products.filter((product) => product.id !== productId);
  }
}
