import React from "react";
function List1() {
  const students = [
    { studid: 1, studname: "Riddhiman", age: 22, city: "Kolkata" },
    { studid: 2, studname: "Sayan", age: 22, city: "Howrah" },
    { studid: 3, studname: "Srijan", age: 21, city: "Durgapur" },
    { studid: 4, studname: "Sourish", age: 21, city: "Asansol" }
  ];
  return (
    <div>
      {students.map((student) => (
        <div key={student.studid}>
          <h2>Student Name - {student.studname}</h2>
          <h3>Age - {student.age}</h3>
          <p>City - {student.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default List1;
