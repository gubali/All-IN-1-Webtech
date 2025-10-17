import fake from 'faker';

let products = '';
for (let i = 0; i < 5; i++) {
    let productName = fake.commerce.productName();
    let price = fake.commerce.price();
    products += `<div>${productName} - <span>${price}</span></div> `;
}
document.getElementById('products').innerHTML = products;
console.log('Products MF loaded', products);