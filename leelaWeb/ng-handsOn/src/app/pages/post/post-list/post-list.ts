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
import { RouterLink, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AddPost } from '../add-post/add-post';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, RouterOutlet, RouterLink],
  standalone: true,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostData implements OnInit {
  postData$: Observable<IPost[]> = of([]);
  //dynamic component related code
  @ViewChild('addPostContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  private componentRef!: ComponentRef<AddPost>;
  isFormLoaded: boolean = false;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.postData$ = this.store.select(getPost);
  }
  async loadAddForm() {
    if (this.isFormLoaded) {
      this.componentRef?.destroy();
      this.isFormLoaded = false;
    } else {
      this.container.clear();
      // const { AddPost } = await import('../add-post/add-post');
      this.componentRef = this.container.createComponent(AddPost);
      this.isFormLoaded = true;
    }
  }
  // ngOnDestroy(): void {
  //   if (this.componentRef) {
  //     this.componentRef.destroy();
  //   }
  // }
}
