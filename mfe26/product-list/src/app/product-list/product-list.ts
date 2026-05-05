import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  addToCart() {
    alert('Added..');
  }
}
