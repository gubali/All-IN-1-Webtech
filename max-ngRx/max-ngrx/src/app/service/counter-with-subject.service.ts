import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterWithSubjectService {
public counterT:number = 0;
  constructor() { }
  getCounter(): number {
    return this.counterT;
  }
  serviceIncriment(){
  this.counterT++;
  }
  serviceDecriment(){
    this.counterT--;
    }

    reset(){
      this.counterT =0;
    }
}
