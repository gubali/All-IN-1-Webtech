import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjec-and-behaviour',
  imports: [],
  standalone: true,
  templateUrl: './subjec-and-behaviour.html',
  styleUrl: './subjec-and-behaviour.css',
})
export class SubjecAndBehaviour implements OnInit {
  subject = new Subject<string>();

  ngOnInit(): void {
    this.subject.subscribe((value) => {
      console.log('sub1 ', value);
    });
     this.subject.subscribe((value) => {
      console.log('sub2 ', value);
    });
    this.subject.next('first value');
    this.subject.next('second value');
  }
}
