import { Invoice } from "./invoice";
import { Product, Order } from "./Order";
import { PaymentProcessing } from "./payment-processing";
import { PriceCalculator } from "./price-calculator";
const prodcut1 = new Product(1, 150, "Laptop");
const prodcut2 = new Product(2, 250, "Mobile");
const prodcut3 = new Product(3, 350, "TAblet");

const order = new Order();
order.addProduct(prodcut1);
order.addProduct(prodcut2);
order.addProduct(prodcut3);
order.removeProduct(1);
console.log("*************List of All Products******************");
console.log(order.getProducts());
console.log(
  "*************Below are total price of all products******************"
);
const priceCalculator = new PriceCalculator();
console.log(priceCalculator.calCulatePrice(order.getProducts()));
const paymentProcess = new PaymentProcessing();
paymentProcess.processingPayment(order);
const invoice = new Invoice();
invoice.generateInvoice(
  order.getProducts(),
  priceCalculator.calCulatePrice(order.getProducts())
);
