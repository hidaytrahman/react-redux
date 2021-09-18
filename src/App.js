import React from "react";
import "./styles.css";
import People from "./components/people/People";

// use redux (define store and reducer)
// render list of people like in example div
// make form: frst name, last name, age
// after pressing OK button you should dispatch action ad add new person to list
// after pressing X you should remove person from the list
// *BONUS: Make validation of the form before accepting new person first

export default function App() {

  return (
    <div className="App container">
      <People />
    </div>
  );
}
