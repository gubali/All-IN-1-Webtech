import { Component, ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { ComponentHeading } from '../re-usable/component-heading/component-heading';
import { CommonFacade } from '../../services/facade/common-facade';

@Component({
  selector: 'app-change-detect',
  imports: [ComponentHeading],
  templateUrl: './change-detect.html',
  styleUrl: './change-detect.css',
})
export class ChangeDetect implements OnInit {
  topicName = 'Chnage detetction in angular';
  creationDate = new Date();
  private messageService = inject(CommonFacade);

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.topicName = 'ZoneJs in  Angular';
      this.cdr.detectChanges();
      console.log('Topic name chnage to:: ', this.topicName);
    }, 2000);
  }
  ngOnInit(): void {
    this.messageService.setName('ChangeDetect');
    this.messageService.sendNotification('Order Placed');
    this.messageService.sendNotification('Payment Successful');
    this.messageService.sendNotification('Item Shipped');
    console.log('************Share replay without same api call******************');
    this.messageService.getUser().subscribe((data) => {
      console.log(data);
    });
  }
  send() {
    this.messageService.sendMassage('Hello from ChangeDetect component');
  }
}
