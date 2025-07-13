import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrintUtilitiesService {
  constructor() {}
  printListUtilities(val: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;
    el.id = 'list-item';
    document.getElementById(containerId)?.appendChild(el);
  }
}
