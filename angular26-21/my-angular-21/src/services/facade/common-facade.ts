import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, shareReplay, Subject } from 'rxjs';
import { IUser } from '../../app/model/user.models';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommonFacade {
  public readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private http = inject(HttpClient);
  private userMassageSubject$ = new Subject<string>();
  public userMassage$: Observable<string> = this.userMassageSubject$.asObservable();
  sendMassage(message: string) {
    this.userMassageSubject$.next(message);
  }

  //private nameSubject$ = new Subject<string>();
  private nameSubject$ = new BehaviorSubject<string>('');
  public name$ = this.nameSubject$.asObservable();
  setName(name: string) {
    this.nameSubject$.next(`Subject Name coming from facade service: ${name}`);
  }

  // replaySubject example of notification
  private notification = new ReplaySubject<string>(10);
  public notification$ = this.notification.asObservable();
  sendNotification(message: string) {
    this.notification.next(message);
  }

  private user$ = this.http.get<IUser[]>(this.apiUrl).pipe(
    shareReplay({ bufferSize: 1, refCount: false }),
    map((users: any) =>
      users.map((u: any) => ({
        name: u.name,
        email: u.email,
        website: u.website,
      })),
    ),
  );
  getUser() {
    return this.user$;
  }
  // http call using latest Httpresource + resouse Api
  public resource = httpResource(() => ({
    url: this.apiUrl,
  }));
}
