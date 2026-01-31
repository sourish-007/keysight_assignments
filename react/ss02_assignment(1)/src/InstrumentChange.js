import React, { useState, useEffect } from "react";
const InstrumentChange = () => {
  const [newInstrument, setNewInstrument] = useState("");
  const handleClick = () => {
    setNewInstrument("Violin");
  };
  useEffect(() => {
    if (newInstrument !== "") {
      console.log("New Instrument updated to:", newInstrument);
    }
  }, [newInstrument]);
  return (
    <div>
      <p>Old Instrument: Drums</p>
      <p>New Instrument: {newInstrument}</p>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};
export default InstrumentChange;
