import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  $use: string = 'Rxjs implementaion';
  message$ = new BehaviorSubject<string[]>([]);
  private message: string[] = [];
  get AllMessage() {
    return [...this.message];
  }
  addMessage(message: string) {
    this.message = [...this.message, message];
    this.message$.next(this.message);
  }
}
