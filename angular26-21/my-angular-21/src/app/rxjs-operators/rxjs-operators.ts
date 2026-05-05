import { HttpClient } from '@angular/common/http';
import { Component, computed, OnInit, signal } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { IUser } from '../model/user.models';

@Component({
  selector: 'app-rxjs-operators',
  imports: [],
  standalone: true,
  templateUrl: './rxjs-operators.html',
  styleUrl: './rxjs-operators.css',
})
export class RxjsOperators implements OnInit {
  protected readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';
  userList = signal<IUser[]>([]);
  search = signal('');
  loading = signal(false);
  error = signal<string | null>(null);
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this._http
      .get<IUser[]>(`${this.apiUrl}`)
      .pipe(
        map((users) =>
          users.map((u) => ({
            name: u.name,
            email: u.email,
            website: u.website,
          })),
        ),
      )
      .subscribe((data: IUser[]) => {
        this.userList.set(data);
        console.log(this.userList());
      });
  }
  getSearchText(event: any) {
    const val = (event.target as HTMLInputElement).value.toLowerCase();
    this.search.set(val);
    console.log(val);
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
