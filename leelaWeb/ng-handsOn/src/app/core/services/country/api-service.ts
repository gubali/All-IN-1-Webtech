import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private suggestions = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Argentina',
    'Australia',
    'Brazil',
    'Canada',
    'China',
    'Germany',
    'India',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
  ];
  getSuggestions(query: string): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredSuggestions = this.suggestions.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredSuggestions);
      }, 300);
    });
  }
}
