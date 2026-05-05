import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('my-angular-21');
  menuOpen = signal<boolean>(false);
  // products

  toggleMenu() {
    this.menuOpen.update((val) => !val);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
}
