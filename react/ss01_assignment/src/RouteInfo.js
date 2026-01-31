import React from "react";
class RouteInfo extends React.Component {
  render() {
    return (
      <div>
        <h4>Route Information</h4>
        <p>Source City: {this.props.source}</p>
        <p>Destination City: {this.props.destination}</p>
      </div>
    );
  }
}
export default RouteInfo;
