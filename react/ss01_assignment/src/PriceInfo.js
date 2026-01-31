import React from "react";
class PriceInfo extends React.Component {
  render() {
    return (
      <div>
        <h4>Price Information</h4>
        <p>Ticket Price: ₹{this.props.ticketPrice}</p>
      </div>
    );
  }
}
export default PriceInfo;
