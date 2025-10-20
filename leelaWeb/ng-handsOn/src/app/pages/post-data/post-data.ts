import { Component, OnInit } from '@angular/core';
import { on, Store } from '@ngrx/store';
import { AppState } from '../../app-store/app.store';

@Component({
  selector: 'app-post-data',
  imports: [],
  standalone: true,
  templateUrl: './post-data.html',
  styleUrl: './post-data.css',
})
export class PostData implements OnInit {
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}
}
