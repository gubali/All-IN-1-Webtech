import { Order } from "./Order";
export class PaymentProcessing {
  processingPayment(order: Order) {
    console.log("Processing payment...");
    console.log("Payment processed successfully!");
    console.log("Added to accounting system!");
    console.log("Email sent to customer!");
  }
}
