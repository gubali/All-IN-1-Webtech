import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallSnippet } from './component/small-snippet/small-snippet';
import { SubjecAndBehaviour } from './component/subjec-and-behaviour/subjec-and-behaviour';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SmallSnippet, SubjecAndBehaviour],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  protected title = 'angular-code-exp';
}
