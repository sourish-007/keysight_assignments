import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './flight-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FlightListComponent],
  template: `
    <h1>Flight Management System</h1>
    <app-flight-list></app-flight-list>
  `
})
export class AppComponent {}
