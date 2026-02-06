import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-form-example',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './form-example.html',
  styleUrl: './form-example.css',
})
export class FormExample {
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });

  setFormValues() {
    this.myForm.setValue({
      name: 'Asif',
      email: 'asifni90@gmail.com',
      gender: 'female',
    });
  }
  patchFormValues() {
    this.myForm.patchValue({
      email: 'asifni0000@gmail.com',
    });
  }

  formSubmitt() {
    if (this.myForm.valid) {
      alert(JSON.stringify(this.myForm.value));
    } else {
      alert('please fill form');
      this.myForm.markAllAsTouched();
    }
  }
}
