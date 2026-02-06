interface IPaymentProcessor {
  processPayment(amount: number): void;
}
export class PaymentProcessor {
  processor: IPaymentProcessor;
  constructor(paymentProcessor: IPaymentProcessor) {
    this.processor = paymentProcessor;
  }
  processPayment(amount: number) {
    this.processor.processPayment(amount);
  }
}

class CreditCardProcessor implements IPaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing creadit card payment of ${amount}`);
  }
}
class GoogleCardProcessor implements IPaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing Google card payment of ${amount}`);
  }
}
const creditCard = new CreditCardProcessor();
const googleCard = new GoogleCardProcessor();
const processor = new PaymentProcessor(creditCard);
const gProcessor = new PaymentProcessor(googleCard);
gProcessor.processPayment(1000);
processor.processPayment(200);
