import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IPost } from '../../../core/models/posts/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-store/app.store';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './add-post.html',
  styleUrl: './add-post.css',
})
export class AddPost implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: [''],
    });
  }
  ngOnInit(): void {
    console.log('add-post===>');
  }

  addPost() {
    // if (!this.form.invalid) {
    //   return false;
    // }
    const post: IPost = {
      title: this.form.value.title,
      body: this.form.value.body,
    };
    this.store.dispatch(addPost({ post }));
    this.form.reset();
  }
}
