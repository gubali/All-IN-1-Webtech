import { Component, signal, WritableSignal } from '@angular/core';
import { IProduct } from '../model/product.model';
import { ModernCommunication } from '../modern-communication/modern-communication';
@Component({
  selector: 'app-todo-signal',
  imports: [ModernCommunication],
  templateUrl: './todo-signal.html',
  styleUrl: './todo-signal.css',
})
export class TodoSignal {
  listOfTask = signal([{ id: 0, title: 'Team lunch' }]);
  title: WritableSignal<string> = signal('');
  products = signal<IProduct[]>([
    {
      id: 1,
      name: 'iPhone 15',
      category: 'Mobile',
      price: 79999,
      inStock: true,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      category: 'Mobile',
      price: 74999,
      inStock: true,
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      category: 'Laptop',
      price: 114999,
      inStock: false,
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      category: 'Laptop',
      price: 99999,
      inStock: true,
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      category: 'Headphones',
      price: 29999,
      inStock: true,
    },
  ]);
  addTodo() {
    const value = this.title();
    if (value.trim()) {
      this.listOfTask.update((item) => [...item, { id: this.listOfTask().length, title: value }]);
      this.title.set('');
    }
  }
  deleteTask(id: number) {
    this.listOfTask.update((task) => task.filter((task) => task.id != id));
  }
}
