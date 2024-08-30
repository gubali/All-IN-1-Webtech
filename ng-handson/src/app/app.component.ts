import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NestedCircleScreenComponent } from './nested-circle-screen/nested-circle-screen.component';
import { ExpHttpRequestComponent } from './exp-http-request/exp-http-request.component';
import { CheckBoxCheckedComponent } from './check-box-checked/check-box-checked.component';
import { ExpRadioMFComponent } from './exp-radio-m-f/exp-radio-m-f.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { DisplayQuoteComponent } from './quote/display-quote/display-quote.component';
import { UpdateQuoteComponent } from './quote/update-quote/update-quote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NestedCircleScreenComponent,
    ExpHttpRequestComponent,
    CheckBoxCheckedComponent,
    ExpRadioMFComponent,
    RxjsExampleComponent,
    DisplayQuoteComponent,
    UpdateQuoteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = signal('ng-handson');
  isActive: boolean = true;
  btnClick() {
    this.title.set('Title changed');
  }
  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];
}
