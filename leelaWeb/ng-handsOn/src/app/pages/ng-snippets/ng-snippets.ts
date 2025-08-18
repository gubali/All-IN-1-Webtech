import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/country/api-service';
interface Iuser {
  name: string;
  age: number;
}
@Component({
  selector: 'app-ng-snippets',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './ng-snippets.html',
  styleUrl: './ng-snippets.css',
})
export class NgSnippets implements OnInit {
  // basic snipppet
  @Input() userName: string = '';
  show: boolean = false;
  autoComlete: string = '';
  showSuggestions: boolean = false;
  fruits: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Mango',
    'Orange',
    'Peach',
    'Pineapple',
    'Strawberry',
  ];
  filterList: string[] = [];
  countryList: string[] = [];
  searchKey1: string = '';
  suggestions: string[] = [];
  constructor(private _apiService: ApiService) {}
  ngOnInit() {
    console.log('ngOnit called');
  }

  getFruitsSugetion() {
    const typedText = this.autoComlete.trim().toLowerCase();
    this.filterList = typedText
      ? this.fruits.filter((elem) => elem.toLowerCase().includes(typedText))
      : this.fruits;
    this.showSuggestions = this.filterList.length > 0;
    console.log(this.showSuggestions);
    if (this.filterList.length === 0) {
      console.log('No record found!');
    }
    console.log(this.filterList);
  }
  fnAutoComlete(fruits: string) {
    this.autoComlete = fruits;
    this.showSuggestions = false;
  }
  getCountrySuggestion() {
    this._apiService.getSuggestions(this.searchKey1).then((data) => {
      this.suggestions = data;
    });
  }
  selectedItems(item: string) {
    this.searchKey1 = item;
    this.suggestions = [];
  }
  toggle() {
    this.show = !this.show;
  }
}
