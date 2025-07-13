import { Component } from '@angular/core';
import { from, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-operator',
  imports: [],
  templateUrl: './rxjs-operator.html',
  styleUrl: './rxjs-operator.css',
})
export class RxjsOperator {
  source1$ = from(['Tech', 'Science', 'Math', 'History']);
  getData(data: any) {
    return of(data + ' is a fascinating subject!');
  }
  ngOnInit() {
    this.source1$
      .pipe(map((data) => this.getData(data)))
      .subscribe((data) =>
        data.subscribe((rslt) => console.log(rslt))
      );
  }
}
