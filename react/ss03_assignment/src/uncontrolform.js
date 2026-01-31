import React, { useRef } from "react";
function UncontrolledForm() {
  const nameRef = useRef();
  const courseRef = useRef();
  const feedbackRef = useRef();
  const ratingRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Student Name: ${nameRef.current.value}
       Course Name: ${courseRef.current.value}
       Feedback: ${feedbackRef.current.value}
       Rating: ${ratingRef.current.value}`
    );
    nameRef.current.value = "";
    courseRef.current.value = "";
    feedbackRef.current.value = "";
    ratingRef.current.value = "";
  };
  return (
    <div>
      <h2>Course Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" ref={nameRef} />
        <input type="text" placeholder="Course Name" ref={courseRef} />
        <textarea placeholder="Feedback Message" ref={feedbackRef} />
        <input type="number" min="1" max="5" placeholder="Rating (1-5)" ref={ratingRef} />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
export default UncontrolledForm;
