import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ICounterState } from '../store/state/counter.state';
import { changeText, customIncriment } from '../store/actions/counter.actions';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { getChannelName } from '../store/selectors/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './custom-counter-input.html',
  styleUrl: './custom-counter-input.css',
})
export class CustomCounterInput implements OnInit {
  txtVal: string = '';
  //userTextFromStore: string = '';
  userTextFromStore$!: Observable<string>;
  constructor(private store: Store<{ counter: ICounterState }>) {}
  ngOnInit(): void {
    // this.store.select('counter').subscribe((res) => {
    //   console.log('user name update');
    //   this.userTextFromStore = res.text || '';
    // });
    this.userTextFromStore$ = this.store.select(getChannelName).pipe(
      tap((res) => console.log('user name from store:', res)),
      map((res: any) => res || '')
    );
  }
  onAdd() {
    this.store.dispatch(customIncriment({ value: +this.txtVal }));
    console.log('Custom Counter Value:', this.txtVal);
  }
  changeText() {
    this.store.dispatch(changeText());
  }
}
