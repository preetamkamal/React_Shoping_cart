import React, { useState } from "react";
//? import React, { Component} from "react";
import "./App.css";
import Person from "./Person/Person";

//? export default class App extends Component {
//?   state = {
//?     persons: [
//?       { name: "babu", age: 20 },
//?       { name: "Rama", age: 21 },
//?       { name: "singh", age: 25 }
//?     ],
//?     someOtherState: ' This is Some Other State'
//?   };
//?
//?   switchNameHandler = () => {
//?     this.setState({
//?       persons: [
//?         { name: "babu rao", age: 20 },
//?         { name: "Rama", age: 21 },
//?         { name: "singh", age: 25 }
//?       ]
//?     });
//?     // console.log("Was Clicked");
//?   };
//?
//?   render() {
//?     return (
//?       <div className="App">
//?         <h1>React Components</h1>
//?         <button onClick={this.switchNameHandler}>Switch Name</button>
//?         <Person
//?           name={this.state.persons[0].name}
//?           age={this.state.persons[0].age}
//?         />
//?         <Person
//?           name={this.state.persons[1].name}
//?           age={this.state.persons[1].age}
//?         >
//?           Hello World
//?         </Person>
//?         <Person
//?           name={this.state.persons[2].name}
//?           age={this.state.persons[2].age}
//?         >
//?           Time for Debug
//?         </Person>
//?       </div>
//?     );
//?   }
//? }

//! USING REACT HOOKS!
const App = props => {
  /**
   * Two elements are returned by useState() funtion:
   * 1. currentState is the first element
   * 2. A function that allows us to update this state
   * and such that react is aware of it and then
   * re-render this component.
   */

  //*using array destructuring
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "babu", age: 20 },
      { name: "Rama", age: 21 },
      { name: "singh", age: 25 }
    ]
  });

  const [someOtherState, setSomeOtherState] = useState(
    "This is some other State"
  );

  //* Functions inside Functions are avaiable in JS itself
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "babuji rao", age: 20 },
        { name: "Rama", age: 21 },
        { name: "singh", age: 25 }
      ]
    });
    // console.log("Was Clicked");
  };

  return (
    <div className="App">
      <h1>React Components</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Hello World
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        Time for Debug
      </Person>
    </div>
  );
};

export default App;
