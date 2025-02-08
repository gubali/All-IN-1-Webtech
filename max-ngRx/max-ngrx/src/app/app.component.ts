import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterWithSubjectService} from './service/counter-with-subject.service'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'max-ngrx';
  counter:number =0;
  myCounter?:number;
  constructor(private counterService:CounterWithSubjectService){
    // this.myCounter = counterService.counterT;
  }
  get counter_s(): number {
    return this.counterService.getCounter();
  }
  incriment(){
    this.counter++;
  }
  decriment(){
    this.counter--;
  }

  serviceIncri(){
    this.counterService.serviceIncriment()
  }
  serviceDecri(){
    this.counterService.serviceDecriment()
  }
}
