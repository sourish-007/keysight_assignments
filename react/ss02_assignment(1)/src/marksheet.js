import React, { useState, useEffect } from "react";
const Marksheet = () => {
  const [name] = useState("Riddhiman");
  const [age] = useState(22);
  const [maths, setMaths] = useState(50);
  const [chemistry, setChemistry] = useState(60);
  const [physics, setPhysics] = useState(70);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(maths + chemistry + physics);
  }, [maths, chemistry, physics]);
  const handleUpdate = () => {
    setMaths(maths + 10);
    setChemistry(chemistry + 10);
    setPhysics(physics + 10);
  };
  return (
    <div>
      <h3>Marksheet</h3>
      <p>
        <strong>Name:</strong> {name} 
        <br></br>
        <strong>Age:</strong> {age}
      </p>
      <p><strong>Total:</strong> {total}</p>
      <p>Maths: {maths}</p>
      <p>Chemistry: {chemistry}</p>
      <p>Physics: {physics}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};
export default Marksheet;
