import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-radio-m-f',
  standalone: true,
  imports: [],
  templateUrl: './exp-radio-m-f.component.html',
  styleUrl: './exp-radio-m-f.component.less',
})
export class ExpRadioMFComponent implements OnInit {
  picByGender: any;
  selectedPic: any;
  ngOnInit(): void {
    this.picByGender = [
      {
        gender: 'Male',
        img: 'data:image/jpeg;base64,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',
      },
      {
        gender: 'Female',
        img: 'data:image/jpeg;base64,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',
      },
    ];
  }
  getSelectedPic(elem: any) {
    this.selectedPic = elem.img;
  }
}
