import React from "react";
import FlightInfo from "./FlightInfo";
class App extends React.Component {
  render() {
    const flightDetails = {
      airlineName: "AirBus",
      airlineCode: "6E203",
      seats: 200,
      source: "Kolkata",
      destination: "Haryana",
      ticketPrice: 4500
    };
    return (
      <div>
        <h2>FLIGHT DETAILS</h2>
        <FlightInfo
          airlineName={flightDetails.airlineName}
          airlineCode={flightDetails.airlineCode}
          seats={flightDetails.seats}
          source={flightDetails.source}
          destination={flightDetails.destination}
          ticketPrice={flightDetails.ticketPrice}
        />
      </div>
    );
  }
}

export default App;
