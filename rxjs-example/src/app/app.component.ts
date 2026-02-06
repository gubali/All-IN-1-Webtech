import { Component, OnInit, VERSION } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
// import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormExpComponent } from './reactive-form-exp/reactive-form-exp.component';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
// interface SelectItem {
//   id: number;
//   name: string;
// }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    ReactiveFormExpComponent,
    CommonModule,
    FormsModule,
    NgSelectModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  myForm!: FormGroup;
  title = 'rxjs-example';
  people: any[] = [];
  list: any[] = [];
  selectedItems: any[] = [];
  constructor(private fb: FormBuilder) {
    this.myForm = new FormGroup({
      country: new FormControl('test'),
      listControl: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      country: [''],
      listControl: [],
    });
    this.list = [
      { label: 'Vilnius', value: 'Vilnius' },
      { label: 'Kaunas', value: 'Kaunas' },
      { label: 'Pavilnys', value: 'Pavilnys' },
      { label: 'Vilnius', value: 'Vilnius' },
      { label: 'Vilnius', value: 'Vilnius' },
      { label: 'Kaunas', value: 'Kaunas' },
      { label: 'Pavilnys', value: 'Pavilnys' },
      { label: 'Vilnius', value: 'Vilnius' },
      { label: 'Vilnius', value: 'Vilnius' },
      { label: 'Kaunas', value: 'Kaunas' },
      { label: 'Pavilnys', value: 'Pavilnys' },
      { label: 'Vilnius', value: 'Vilnius' },
    ];
    this.selectedItems = [this.list[0].label, this.list[1].label];
    this.selectAllForDropdownItems(this.list);
    // console.log('selected people', this.selectedItems);
    // this.people = [
    //   { id: 1, name: 'Option 1' },
    //   { id: 2, name: 'Option 2' },
    //   { id: 3, name: 'Option 3' },
    //   { id: 4, name: 'Option 4' },
    //   { id: 5, name: 'Option 5' },
    //   { id: 6, name: 'Option 6' },
    //   { id: 6, name: 'Option 7' },
    //   { id: 8, name: 'Option 8' },
    //   { id: 8, name: 'Option 9' },
    //   { id: 10, name: 'Option 10' },
    //   { id: 11, name: 'Option 11' },
    //   { id: 12, name: 'Option 12' },
    // ];
    // this.selectedItems = [this.people[0].name, this.people[1].name];
    this.myForm.controls['listControl'].valueChanges.subscribe((value) => {
      //console.log(value);
      // if (value) {
      //   this.myForm.patchValue({});
      // }
    });
  }

  selectAllForDropdownItems(items: any[]) {
    let allSelect = (items: any) => {
      items.forEach((element: any) => {
        element['selectedAllGroup'] = 'selectedAllGroup';
      });
    };

    allSelect(items);
  }
  selectAllItems() {
    const options = this.people.map((item) => item.name);
    this.selectedItems = [...options];
    console.log('sasa', this.selectedItems);
  }
  clearAllItems() {
    this.selectedItems = [];
  }
  trackItem(index: number, item: any): any {
    return item ? item.id : null;
  }

  onSubmit() {
    const formValue: any = [];
    // Object.keys(this.form.controls).map((key) => {
    //   console.log(key);
    //   const parsedValue = {
    //     [key]: this.form.get(key)?.value,
    //     changed: this.form!.get(key)?.dirty,
    //   };

    //   formValue.push(parsedValue);
    // });

    console.log(this.myForm.value);
  }
}
