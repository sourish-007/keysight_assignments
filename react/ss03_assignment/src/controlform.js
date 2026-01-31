import React, { useState } from "react";
function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    gender: "",
    terms: false
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      name: "",
      email: "",
      age: "",
      course: "",
      gender: "",
      terms: false
    });
  };
  const isFormValid =
    formData.name &&
    formData.email &&
    formData.age &&
    formData.course &&
    formData.gender &&
    formData.terms;
  return (
    <div>
      <h2>Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
        />
        {!formData.name && <p>Name is required</p>}
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
        />
        {!formData.email && <p>Email is required</p>}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        {!formData.age && <p>Age is required</p>}
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select Course</option>
          <option>React</option>
          <option>Angular</option>
          <option>Java</option>
          <option>Python</option>
        </select>
        {!formData.course && <p>Course is required</p>}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        {!formData.gender && <p>Gender is required</p>}
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          Accept Terms & Conditions
        </label>
        {!formData.terms && <p>You must accept terms</p>}
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {submittedData && (
        <div style={{ border: "1px solid black", marginTop: "20px", padding: "10px" }}>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>Course: {submittedData.course}</p>
          <p>Gender: {submittedData.gender}</p>
        </div>
      )}
    </div>
  );
}
export default ControlledForm;