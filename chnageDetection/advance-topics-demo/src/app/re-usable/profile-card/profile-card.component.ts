import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  standalone:true,
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
@Input() ChildRcvrName!:string;
@Input() customRed!:string;
}
