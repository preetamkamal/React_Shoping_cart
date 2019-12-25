import React from "react";
import "./Person.css";
//What is Pure Component
const person = props => {
  return (
    <div className="Person">
      <p>{props.children}</p>

      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;
