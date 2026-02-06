import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store/app.store';
import { getPostById } from '../state/post.selector';
import { filter, map, switchMap } from 'rxjs';
import { IPost } from '../../../core/models/posts/post.model';

@Component({
  selector: 'app-edit-post',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.css',
})
export class EditPost implements OnInit {
  updateForm!: FormGroup;
  post: IPost | undefined;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.updateForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: [''],
    });
  }
  ngOnInit(): void {
    // this.route.paramMap.subscribe((param) => {
    //   const id = param.get('id');
    //   this.store.select(getPostById, { id }).subscribe((res) => {
    //     console.log(res);
    //   });
    // });
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')), // get id from URL
        filter((id): id is string => !!id), // ensure id is string, not null
        switchMap((id) => this.store.select(getPostById(id))) // use selector factory
      )
      .subscribe((post) => {
        this.post = post;
        if (this.post) {
          // populate reactive form
          this.updateForm.patchValue({
            title: this.post.title,
            body: this.post.body,
          });
        }
      });
  }
  updatePost() {
    if (!this.updateForm.valid) {
      return;
    }
    const { title, body } = this.updateForm.getRawValue();
    console.log(title, body);
    const post: IPost = {
      id: this.post?.id,
      title: title,
      body: body,
    };
    // disptach actions
    //this.store.select();
  }
}
