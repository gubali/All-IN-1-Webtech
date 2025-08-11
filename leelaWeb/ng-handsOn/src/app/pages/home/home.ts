import { Component } from '@angular/core';
import { ProductServices } from '../../core/services/products/product-services';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  prodData: Product[] = [];
  filterData: Product[] = [];
  dataSubcription?: Subscription;
  myValue: string = 'asif';
  searchText: string = '';
  constructor(private _productService: ProductServices) {}
  ngOnInit() {
    this.loadProductDate();
  }
  loadProductDate() {
    this.dataSubcription = this._productService.getProduct().subscribe({
      next: (res) => {
        if (Array.isArray(res)) {
          this.prodData = res;
          this.filterData = [...this.prodData];
          console.log(
            '***********************products************************'
          );
          console.log(this.prodData);
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  onDestroye() {
    if (this.dataSubcription) {
      this.dataSubcription.unsubscribe();
    }
  }
  fnSearchText() {
    const searchKey = this.searchText.toLowerCase();
    this.filterData = this.prodData.filter((elem) =>
      elem.title.toLowerCase().includes(searchKey)
    );
  }
}
