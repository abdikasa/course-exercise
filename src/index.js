import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 2.1: Course information step6 --- FINSIHED
// Define a component responsible for formatting a single course called Course.
// Hence, the Course component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.

// 2.2: Course information step7 ----FINISHED
// Show also the sum of the exercises of the course.

// 2.3*: Course information step8 ----FINISHED
// If you haven't done so already, calculate the sum of exercises with the array method reduce.

// 2.4: Course information step9  ----FINISHED
// Let's extend our application to allow for an arbitrary number of courses

// 2.5: separate module ----FINISHED
// Declare the Course component as a separate module, which is imported by the App component. You can include all subcomponents of the course into the same module.

ReactDOM.render(<App />, document.getElementById("root"));
