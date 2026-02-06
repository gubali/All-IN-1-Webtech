import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-small-snippet',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './small-snippet.html',
  styleUrl: './small-snippet.css',
  encapsulation:ViewEncapsulation.None
})
export class SmallSnippet {
name:string = '';
}
