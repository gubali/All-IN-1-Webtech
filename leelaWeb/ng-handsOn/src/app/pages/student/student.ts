import { Component } from '@angular/core';
import { sharedModule } from '../../core/shared/shared';

@Component({
  selector: 'app-student',
  imports: [sharedModule],
  standalone:true,
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

}
