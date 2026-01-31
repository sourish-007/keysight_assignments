import React from "react";
import { createRoot } from "react-dom/client";
import ControlledForm from "./controlform";
import UncontrolledForm from "./uncontrolform";
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ControlledForm />
    <hr />
    <UncontrolledForm />
  </React.StrictMode>
);
