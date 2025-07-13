import { Component, OnInit } from '@angular/core';
import {
  catchError,
  combineLatest,
  concat,
  forkJoin,
  interval,
  map,
  merge,
  mergeMap,
  Observable,
  of,
  ReplaySubject,
  take,
  throwError,
  zip,
} from 'rxjs';
import { PrintUtilitiesService } from '../print-utilities.service';
import { ajax } from 'rxjs/ajax';
import { HttpClient } from '@angular/common/http';
import { ProfileCardComponent } from '../re-usable/profile-card/profile-card.component';

@Component({
  selector: 'app-rxjs-demo',
  imports: [ProfileCardComponent],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.css',
  standalone: true,
})
export class RxjsDemoComponent implements OnInit {
  isDirty = false;
  public sourse1$ = interval(1000).pipe(
    map((v) => 'first ' + (v + 1)),
    take(3)
  );
  public source2$ = of('HTML', 'CSS', 'JavaScript');
  public source3$ = of('200', '300', '400');
  constructor(
    private _utils: PrintUtilitiesService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.loadData();
    const frontEnd$ = interval(500).pipe(
      map((v) => 'Front end technology: ' + (v + 1)),
      take(3)
    );
    const failedOb$ = throwError(() => new Error('failed to load data!'));
    // const readbleOnError$ = failedOb$.pipe(
    //   catchError(() => of('Failed to load data'))
    // );
    const backEnd$ = interval(1000).pipe(
      map((v) => 'Back end technology: ' + (v + 1)),
      take(2)
    );
    const fullStack$ = interval(5000).pipe(
      map((v) => 'Full stack technology: ' + (v + 1)),
      take(4)
    );
    const withConcat$ = concat(frontEnd$, backEnd$, fullStack$); //concat operator
    const withMerge$ = merge(frontEnd$, backEnd$, fullStack$); // merge operator
    withConcat$.subscribe((data) =>
      this._utils.printListUtilities(data, 'concat-list')
    );
    withMerge$.subscribe((data) =>
      this._utils.printListUtilities(data, 'merge-list')
    );
    // merge cll with api
    this.loadRxjsOperators();

    //forkjoin
    // this.myForkJoin();

    // custom observable
    this.customObservable();

    //replay Subject
    this.customReplaySubject();
  }
  data: any = [];
  loadData() {
    of(1, 2, 3)
      .pipe(
        mergeMap((id) =>
          ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`)
        )
      )
      .subscribe((response) => this.data.push(response));
  }
  // merge api call

  loadRxjsOperators() {
    merge(this.sourse1$, this.source2$, this.source3$).subscribe((data) => {
      this._utils.printListUtilities(data, 'map3-list');
    });
    forkJoin([this.sourse1$, this.source2$, this.source3$]).subscribe(
      (data) => {
        this._utils.printListUtilities(data, 'fork__join-list');
      }
    );
    combineLatest([this.source2$, this.source3$]).subscribe(([val2, val3]) => {
      console.log('CombinedLatest', val2, val3);
      //this._utils.printListUtilities(data, 'combine__latest-list');
    });
    zip([this.source2$, this.source3$]).subscribe(([val1, val2]) => {
      this._utils.printListUtilities([val1, val2], 'zip-list');
    });
  }

  // cutom observable
  customObservable() {
    let source1$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Welcome to');
      }, 1000);
    });
    let source2$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Angular World!');
      }, 1500);
    });
    combineLatest([source1$, source2$]).subscribe((data) => {
      this._utils.printListUtilities(data, 'combine__latest-list');
    });
  }
  // replay Subject
  customReplaySubject() {
    const varReplay = new ReplaySubject(2);
    varReplay.next('first');
    varReplay.next('second');
    varReplay.next('third');
    varReplay.subscribe(console.log);
  }
  // canaDeactivate handons
  canDeActivate(): boolean {
    return confirm('Do you want Leave this page!');
  }
  marDirty() {
    this.isDirty = true;
  }
}
