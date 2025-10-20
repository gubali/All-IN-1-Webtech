import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { on, Store } from '@ngrx/store';
import { AppState } from '../../../app-store/app.store';
import { Observable, of } from 'rxjs';
import { IPost } from '../../../core/models/posts/post.model';
import { getPost } from '../state/post.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostData implements OnInit {
  postData$: Observable<IPost[]> = of([]);
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.postData$ = this.store.select(getPost);
  }
  // ngOnDestroy(): void {
  //   if (this.componentRef) {
  //     this.componentRef.destroy();
  //   }
  // }
}
