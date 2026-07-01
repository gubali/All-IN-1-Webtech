import { Component, inject, input, OnInit } from '@angular/core';
import { CommonFacade } from '../../../services/facade/common-facade';

@Component({
  selector: 'app-component-heading',
  imports: [],
  templateUrl: './component-heading.html',
  styleUrl: './component-heading.css',
})
export class ComponentHeading implements OnInit {
  titleHeading = input.required<string>();
  private messageService = inject(CommonFacade);
  message: string = '';

  ngOnInit(): void {
    this.messageService.userMassage$.subscribe((data) => (this.message = data));
  }
}
