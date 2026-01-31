import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from './flight-service';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-list.html',
  styleUrls: ['./flight-list.css']
})
export class FlightListComponent implements OnInit {

  flights: any[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.getFlightRecords();
  }
}
