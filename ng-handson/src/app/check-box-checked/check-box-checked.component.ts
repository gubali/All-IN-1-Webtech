import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-box-checked',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './check-box-checked.component.html',
  styleUrl: './check-box-checked.component.less',
})
export class CheckBoxCheckedComponent implements OnInit {
  selectedCheckList: any;
  //selectedCheckedList: any;
  masterCheckList: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.selectedCheckList = [
      { id: 1, name: 'PHP', isSelected: false },
      { id: 2, name: 'Laravel', isSelected: false },
      { id: 3, name: 'Angular', isSelected: true },
      { id: 4, name: 'React', isSelected: true },
      { id: 5, name: 'Vue', isSelected: true },
      { id: 6, name: 'JQuery', isSelected: false },
      { id: 7, name: 'Javascript', isSelected: false },
    ];
  }
  checkUncheclAll() {
    this.selectedCheckList.forEach((item: any) => {
      item.isSelected = this.masterCheckList;
    });
  }
  isAllSelected() {
    this.masterCheckList = this.selectedCheckList.every((item: any) => {
      return item.isSelected == true;
    });
  }
}
