import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, NonNullableFormBuilder, FormBuilder } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { take, map, single } from 'rxjs';

@Component({
  selector: 'app-change-detection-example',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './change-detection-example.component.html',
  styleUrl: './change-detection-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionExampleComponent implements OnInit {
  myform:FormGroup;
  http = inject(HttpClient);
  userList: any[] = [];
  userList1 = signal<any>([]);
  name: string = '';
  customControl = new FormControl('');

  constructor(private cdRef: ChangeDetectorRef, private fb: FormBuilder) {
    this.myform = this.fb.group({
      customControl: ['', Validators.required],
  

  });
}

  ngOnInit(): void {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        take(1),
        map((data) => data.slice(0, 2))
      )
      .subscribe((data: any) => {
        this.userList = data;
        this.userList1.set(data);
        this.name = 'test';
        this.cdRef.detectChanges();
      });
  }
  onSubmit() {

  }
}
