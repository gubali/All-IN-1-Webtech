import { Product } from "./Order";

export class Invoice {
  generateInvoice(products: Product[], amount: number) {
    console.log(`
    Invoice Date: ${new Date().toDateString()}
-----------------------------------------------------------------------------------
ProductName\tPrice
    `);
    products.forEach((elem) => {
      console.log(`${elem.name}\t\t${elem.price}`);
    });
    console.log(
      "----------------------------------------------------------------------"
    );
    console.log(`Total ${amount}`);
  }
}
