import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  getFlightRecords() {
    return [
      {
        flightNumber: 'AI101',
        source: 'Delhi',
        destination: 'Mumbai',
        departureTime: '10:00 AM',
        status: 'On Time'
      },
      {
        flightNumber: 'AI202',
        source: 'Chennai',
        destination: 'Bangalore',
        departureTime: '01:30 PM',
        status: 'Delayed'
      },
      {
        flightNumber: 'AI303',
        source: 'Kolkata',
        destination: 'Delhi',
        departureTime: '06:45 PM',
        status: 'Cancelled'
      }
    ];
  }
}
