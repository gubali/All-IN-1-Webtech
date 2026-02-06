import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  signal,
  ViewContainerRef,
  EnvironmentInjector,
  OnDestroy,
  inject,
  createComponent,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Employee } from '../../employee/employee';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit, OnDestroy {
  userForm!: FormGroup;
  //@ViewChild(Employee) child!: Employee;  //  old way to access view child
  toDoList = signal<
    {
      firstName?: string;
      lastName?: string;
      mobileNumber?: string;
      gender?: string;
      bTech?: string;
    }[]
  >([]);
  constructor(private fb: FormBuilder) {}
  // signal
  editIndex = signal<number | null>(null);
  // Signal to Manage a Dynamic Child Component
  private employeeRef = signal<any | null>(null);
  private injector = inject(EnvironmentInjector);

  ngOnInit(): void {
    this.initUserForm();
    //this.counter.update((oldValue) => oldValue + 1);
    //console.log('When update or mutate variabl(Update)' + this.counter);
  }

  initUserForm() {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      mobileNumber: [''],
      gender: [''],
      bTech: [false],
    });
  }

  registrList() {
    const formValue = { ...this.userForm.value };
    formValue.bTech = formValue.bTech ? 'B.Tech' : '';
    if (this.editIndex() !== null) {
      this.toDoList.update((list) => {
        const update = [...list];
        update[this.editIndex()!] = formValue;
        return update;
      });
      this.editIndex.set(null);
    } else {
      this.toDoList.update((list) => [...list, formValue]);
    }
    this.userForm.reset({ bTech: false });
  }
  deletItemById(id: number) {
    this.toDoList.update((list) => list.filter((_, i) => i !== id));
    this.userForm.reset({ bTech: false });
  }

  editItem(index: number) {
    const item = this.toDoList()[index];
    this.editIndex.set(index);
    this.userForm.patchValue({
      firstName: item.firstName,
      lastName: item.lastName,
      mobileNumber: item.mobileNumber,
      gender: item.gender,
      bTech: item.bTech === 'B.Tech',
    });
  }
  async callMethodOfXComponent() {
    const { Employee } = await import('../../employee/employee');
    const compRef = createComponent(Employee, {
      environmentInjector: this.injector,
    });
    this.employeeRef.set(compRef);
    const result = compRef.instance.ImChildMethod();
    alert(result);
    compRef.destroy();
    this.employeeRef.set(null);
  }
  ngOnDestroy(): void {
    // this.employeeRef()?.destroy();
  }
}
