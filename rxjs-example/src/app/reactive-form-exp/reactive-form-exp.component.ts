import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, tap } from 'rxjs';
export interface Country {
  continent: String;
  country: string;
}
@Component({
  selector: 'app-reactive-form-exp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-exp.component.html',
  styleUrl: './reactive-form-exp.component.css',
})
export class ReactiveFormExpComponent {
  continentSelect = new FormControl();
  countrySelect = new FormControl();
  currentContinentSelection: string;
  currentCountrySelection: string;
  countries: Array<Country>;
  continentSelection$: Observable<string>;
  currentContinent: string;
  constructor(private http: HttpClient) {
    http
      .get<Country[]>(
        'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json'
      )
      .subscribe((data) => (this.countries = data));
    this.continentSelection$ = this.continentSelect.valueChanges.pipe(
      tap((continent) => (this.currentContinent = continent))
    );
  }
}
