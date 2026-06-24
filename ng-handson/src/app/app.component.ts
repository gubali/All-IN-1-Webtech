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
import {
  filter,
  Observable,
  Subject,
  BehaviorSubject,
  ReplaySubject,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
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
    // promise and obsevable
    const myPromise = new Promise((resolve) => {
      //console.log('Promise calle without then');
      setTimeout(() => {
        resolve('promise working');
        resolve('promise working');
        resolve('promise working');
        resolve('promise working');
      }, 1000);
    });
    myPromise.then((rslt) => console.log(rslt));
    const observable = new Observable((subscribe) => {
      console.log('no subscribe');
      setTimeout(() => {
        subscribe.next('observable works 1');
        subscribe.next('observable works 2');
        subscribe.next('observable works 3');
        subscribe.next('observable works 4');
      }, 1000);
    });
    observable
      .pipe(filter((d) => d === 'observable works 1'))
      .subscribe((data) => console.log(data));
    //Observable is unicast
    const obs$1 = new Observable((obj) => obj.next(Math.random()));
    console.log('*************Observable multicast**************');
    //subcribe 1
    obs$1.subscribe((d) => console.log(d));
    obs$1.subscribe((d) => console.log(d));
    obs$1.subscribe((d) => console.log(d));
    obs$1.subscribe((d) => console.log(d));
    // example of Subject
    console.log('*****Subject example*******');
    const subject = new Subject();
    subject.subscribe((d) => console.log('subject1', d));
    subject.subscribe((d) => console.log('subject2', d));
    subject.subscribe((d) => console.log('subject3', d));
    subject.subscribe((d) => console.log('subject4', d));
    subject.next(Math.random());
    // exp 2 of subject
    const sub2 = new Subject();
    sub2.next(1);
    sub2.next(2);
    sub2.subscribe((v) => console.log('A:', v));
    sub2.next(3);
    console.log('********End subject********');
    console.log('*****ReplySubject example*******');
    const repSubject = new ReplaySubject<number>(23);
    repSubject.next(1);
    repSubject.next(2);
    repSubject.next(3);
    repSubject.subscribe((v) => `Replay ${v}`);
    repSubject.next(4);
    console.log('*****end*******');
    // Observable = Provider + consumer : this unicast(each run independent)
    const apiSub = new Subject(); // multicast
    const apiCall = ajax('https://jsonplaceholder.typicode.com/todos');
    // apiCall.subscribe((d) => console.log('Api 1', d.response));
    // apiCall.subscribe((d) => console.log('api 2', d.response));
    // apiCall.subscribe((d) => console.log('api 3', d.response));
    // above same api call 3 times.
    // below use Subject for multicast
    apiSub.subscribe((d) => console.log('api subject', d));
    apiSub.subscribe((d) => console.log('api subject', d));
    apiCall.subscribe(apiSub);
    console.log('********Behavior Subject example*******');
    const bSubject = new BehaviorSubject<number>(23);
    bSubject.subscribe((d) => console.log(`Beviour subject 1:  ${d}`));
    bSubject.next(2000);
    bSubject.subscribe((d) => console.log(`Beviour subject 2:  ${d}`));
    bSubject.subscribe((d) => console.log(`Beviour subject 3:  ${d}`));
    console.log('********End Behavior Subject example*******');
  }

  onClick() {
    if (true) {
      this.apiHeaderFlag == !this.apiHeaderFlag;
    }
  }
}
