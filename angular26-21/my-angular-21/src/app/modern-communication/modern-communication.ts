import { Component, effect, input, signal } from '@angular/core';
import { IProduct } from '../model/product.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-modern-communication',
  imports: [JsonPipe],
  templateUrl: './modern-communication.html',
  styleUrls: ['./modern-communication.css'],
})
export class ModernCommunication {
  productsItems = input<IProduct[]>();
  constructor() {
    effect(() => {
      const data = this.productsItems();
      if (data?.length) {
        console.log('Child received: ', this.productsItems());
      }
    });
  }
}
