import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NestedCircleScreenComponent } from './nested-circle-screen/nested-circle-screen.component';
import { ExpHttpRequestComponent } from './exp-http-request/exp-http-request.component';
import { CheckBoxCheckedComponent } from './check-box-checked/check-box-checked.component';
import { ExpRadioMFComponent } from './exp-radio-m-f/exp-radio-m-f.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { DisplayQuoteComponent } from './quote/display-quote/display-quote.component';
import { UpdateQuoteComponent } from './quote/update-quote/update-quote.component';
import { TemplateDrivenFormComponent } from './form-snippets/template-driven-form/template-driven-form.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { SignalComponentComponent } from './signal-component/signal-component.component';
import { TextboxCalculationComponent } from './textbox-calculation/textbox-calculation.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NestedCircleScreenComponent,
    ExpHttpRequestComponent,
    CheckBoxCheckedComponent,
    ExpRadioMFComponent,
    RxjsExampleComponent,
    DisplayQuoteComponent,
    UpdateQuoteComponent,
    TemplateDrivenFormComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SignalComponentComponent,
    TextboxCalculationComponent,
    ChartComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  title = signal('ng-handson');
  apiHeaderFlag: boolean = false;
  isActive: boolean = true;
  myArr = ['amit_kumar', 'asif_khan'];
  btnClick() {
    this.title.set('Title changed');
  }
  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];
  data = ['Apple', 'Orange', 'XYZ'];
  ngOnInit(): void {
    const arr = this.data.map((elem) => {
      return { label: elem, value: elem };
    });
    console.log(arr);
    localStorage.setItem('token', 'xdtart');
    const testArr = this.myArr.map((elem) => {
      const capital = elem
        .split('_')
        .map((part) => {
          return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join(' ');
      return capital;
    });
    console.log(testArr);
  }
  onClick() {
    if (true) {
      this.apiHeaderFlag == !this.apiHeaderFlag;
    }
  }
}
