import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeBoundService } from '../../core/services/debouce/de-bound-service';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-debounce-exp',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './debounce-exp.html',
  styleUrl: './debounce-exp.css',
})
export class DebounceExp implements OnInit {
  searchControl = new FormControl('');
  results: any[] = [];
  loading = false;
  constructor(private DeBoundService: DeBoundService) {}
  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((query: string | null) => {
          if (!query) {
            this.results = [];
            return of([]);
          }

          this.loading = true;
          return this.DeBoundService.search(query);
        })
      )
      .subscribe((result: any) => {
        console.log(result);
        this.results = result.products || [];
        this.loading = false;
      });
  }
}
