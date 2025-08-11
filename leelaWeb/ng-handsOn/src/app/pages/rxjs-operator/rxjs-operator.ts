import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  combineLatest,
  concat,
  concatMap,
  delay,
  forkJoin,
  map,
  of,
  throwError,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-rxjs-operator',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './rxjs-operator.html',
  styleUrl: './rxjs-operator.css',
})
export class RxjsOperator implements OnInit {
  users: any[] = [];
  posts: any[] = [];
  comments: any[] = [];
  queryName: string = '';
  filterUserByName: any[] = [];
  localUser: string = 'https://gorest.co.in/public/v2/users';
  postUser: string = 'https://gorest.co.in/public/v2/posts';
  commentUser: string = 'https://gorest.co.in/public/v2/comments';
  combineLatest$: any[] = [];
  readonly initData = of('initial Data is: A,B,C');
  readonly additionalData = of('Additional data is: D,E,F').pipe(delay(3000));
  // readonly additionalData = throwError('Additional data is: D,E,F').pipe(delay(3000));
  readonly additionalData1 = of('Additional data is: G,H,I');
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    const user$ = this._http.get<any[]>(`${this.localUser}`);
    const post$ = this._http.get<any[]>(`${this.postUser}`);
    const comments$ = this._http.get<any[]>(`${this.commentUser}`);
    forkJoin([user$, post$, comments$]).subscribe(([user, post, comments]) => {
      this.users = user;
      this.filterUserByName = [...this.users];
      this.posts = post;
      this.comments = comments;
    });

    this.getDataByCombineLatest();
    this.getConcat();
    this.getConcatMap();
  }
  filterDataByUserName(): void {
    const searchKey = this.queryName.toLowerCase();
    this.filterUserByName = this.users.filter((elem) =>
      elem.name?.toLowerCase().includes(searchKey)
    );
  }

  // combineLatest with demo
  getDataByCombineLatest() {
    const c_users$ = ajax.getJSON<any[]>(`${this.localUser}`);
    const c_post$ = ajax.getJSON<any[]>(`${this.postUser}`);
    combineLatest([c_users$, c_post$])
      .pipe(
        map(([users, posts]: any[]) => {
          return posts.map((post: any) => {
            const user = users.find(
              (u: any) => String(u.id) === String(post.user_id)
            );
            return {
              name: user ? user.name : 'unknown',
              title: post.title,
              body: post.body,
            };
          });
        })
      )
      .subscribe((data) => (this.combineLatest$ = data));
  }

  //concat

  getConcat() {
    concat(this.initData, this.additionalData, this.additionalData1).subscribe(
      (data) => console.log()
    );
  }

  readonly transformObservable = (val: any) => {
    return of(`${val} processed`).pipe(delay(1000));
  };
  getConcatMap() {
    of("A","B", "C")
      .pipe(concatMap((val) => this.transformObservable(val)))
      .subscribe((rslt) => console.log(rslt));
  }
}
