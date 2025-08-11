import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-layout',
  imports: [RouterModule,Header],
  standalone:true,
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
