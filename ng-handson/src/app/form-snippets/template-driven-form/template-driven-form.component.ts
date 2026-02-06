import { Component, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.less',
})
export class TemplateDrivenFormComponent {
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
