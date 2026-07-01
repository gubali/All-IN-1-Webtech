import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { IUser } from '../model/user.models';
import { CommonFacade } from '../../services/facade/common-facade';
import { BehaviorSubject, observable, Observable, ReplaySubject, Subject } from 'rxjs';
@Component({
  selector: 'app-rxjs-operators',
  imports: [],
  standalone: true,
  templateUrl: './rxjs-operators.html',
  styleUrl: './rxjs-operators.css',
})
export class RxjsOperators implements OnInit {
  private commonFacade = inject(CommonFacade);
  userList = signal<IUser[]>([]);
  search = signal('');
  loading = signal(false);
  error = signal<string | null>(null);
  // facde name receiever
  public rxjsReceiever = '';
  // Cold observable
  private cold$ = new Observable((observer) => {
    console.log('cold Observable started');
    observer.next(1);
    observer.next(2);
    observer.next(3);
  });

  // Hot observable => All subscriber share same data sources. subject And Behaviour Subject
  private subject$ = new Subject<number>();
  private behaviourSubject$ = new BehaviorSubject<number>(0);
  private replaySubject$ = new ReplaySubject<number>(2);
  HotObservable() {
    console.log('******Hot Subscriber ************');
    this.subject$.next(100);
    this.subject$.next(200);
    this.subject$.subscribe((val) => {
      console.log('Sub-Hot Subscriber A', val);
    });
    this.subject$.subscribe((val) => {
      console.log('Sub - Hot Subscriber B', val);
    });
    this.subject$.next(500);
    this.subject$.next(5000);
    this.subject$.next(5000);
    this.behaviourSubject$.subscribe((val) => {
      console.log('Sub - Behaviour Subscriber A :', val);
    });
    this.behaviourSubject$.next(1000);
    this.behaviourSubject$.subscribe((val) => {
      console.log('Sub - Behaviour Subscriber B :', val);
    });
    this.behaviourSubject$.next(2000);
    this.behaviourSubject$.subscribe((val) => {
      console.log('Sub - Behaviour Subscriber C :', val);
    });
    this.behaviourSubject$.next(5000);

    console.log('*******Replay Subject**************');
    this.replaySubject$.next(30);
    this.replaySubject$.next(31);
    this.replaySubject$.next(32);
    this.replaySubject$.next(33);
    this.replaySubject$.subscribe((val) => console.log('Replay Subject', val));

    // replay Subject - notification
    this.commonFacade.notification$.subscribe((message) => {
      console.log('Notification from facade service: ', message);
    });
  }
  constructor(private _http: HttpClient) {
    console.log(this.commonFacade.resource);
  }
  ngOnInit(): void {
    this.commonFacade.getUser().subscribe((data) => {
      this.userList.set(data);
    });
    // facde service - name
    this.commonFacade.name$.subscribe((value) => {
      this.rxjsReceiever = value;
    });
    // this.commonFacade.name$.subscribe((value) => {

    // });
    // this.commonFacade.name$.subscribe((value) => {
    //   console.log(value);
    // });
    // cold observable
    console.log('********Cold Observable***********');
    this.cold$.subscribe((val) => console.log('A Subscriber', val));
    this.cold$.subscribe((val) => console.log('B Subscriber', val));
    this.cold$.subscribe((val) => console.log('C Subscriber', val));

    // subject method
    this.HotObservable();
  }
  private readonly userEffect = effect(() => {
    console.log('****http call using latest Httpresource + resouse Api***********');
    const user = this.commonFacade.resource.value();
    if (!user) return;
    console.log('resourse user loaded:', user);
  });
  getSearchText(event: any) {
    const val = (event.target as HTMLInputElement).value.toLowerCase();
    this.search.set(val);
  }
  filterUserData = computed(() => {
    return this.userList().filter(
      (user) =>
        user.name.toLowerCase().includes(this.search()) ||
        user.email.toLowerCase().includes(this.search()) ||
        user.website?.toLowerCase().includes(this.search()),
    );
  });
}
