import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  incriment,
  reset,
} from '../../store/actions/counter.actions';
import { ICounterState } from '../../store/state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CustomCounterInput } from '../../custom-counter-input/custom-counter-input';
import { getCounter } from '../../store/selectors/counter.selectors';
import { AppState } from '../../app-store/app.store';
import { PostData } from '../post/post-list/post-list';
@Component({
  selector: 'app-ngrx-exp',
  imports: [CommonModule, CustomCounterInput],
  standalone: true,
  templateUrl: './ngrx-exp.html',
  styleUrl: './ngrx-exp.css',
})
export class NgrxExp implements OnInit, OnDestroy {
  counter!: number;
  counterSubcription!: Subscription; // method 1
  counter$!: Observable<ICounterState>;
  //dynamic component related code
  @ViewChild('postDataTemplate', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  private componentRef!: ComponentRef<PostData>;
  isDynamicComponentLoaded: boolean = false;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.counterSubcription = this.store.select(getCounter).subscribe((res) => {
      console.log('Counter Value from Store:', res);
      this.counter = res;
    });
    // this.counter$ = this.store.select(getCounter);
  }

  onIncrement(): void {
    this.store.dispatch(incriment());
  }
  onDecrement(): void {
    this.store.dispatch(decrement());
  }
  onReset(): void {
    this.store.dispatch(reset());
  }
  // below method is for method 1
  // ngOnDestroy(): void {
  //   if (this.counterSubcription) {
  //     this.counterSubcription.unsubscribe();
  //   }
  // }
  loadDynamicComponent() {
    if (this.isDynamicComponentLoaded) {
      this.componentRef?.destroy();
      this.isDynamicComponentLoaded = false;
    } else {
      this.container.clear();
      this.componentRef = this.container.createComponent(PostData);
      this.isDynamicComponentLoaded = true;
    }
  }
  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
