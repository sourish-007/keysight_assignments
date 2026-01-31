import React from "react";
import RouteInfo from "./RouteInfo";
import PriceInfo from "./PriceInfo";
class FlightInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Flight Information</h3>
        <p>Airline Name: {this.props.airlineName}</p>
        <p>Airline Code: {this.props.airlineCode}</p>
        <p>Seats Available: {this.props.seats}</p>
        <RouteInfo
          source={this.props.source}
          destination={this.props.destination}
        />
        <PriceInfo
          ticketPrice={this.props.ticketPrice}
        />
      </div>
    );
  }
}

export default FlightInfo;
