import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";
class App extends Component {
  state = {
    persons: [
      { id: "asdsad", name: "Max", age: 28 },
      { id: "dsfatu", name: "Manu", age: 29 },
      { id: "fdsgge", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    personStatus: false
  };

  nameChangedHandler = (event, id) => {
    //*Finding Index of the changed element in the list
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //*Making a copy of the required element (As a object)
    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value;

    //*making a copy of the whole list
    const persons = [...this.state.persons];
    //*replacing the conent in the copied list
    persons[personIndex] = person;

    //*replacing copied list in place of old list
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1); //** check the spelling of splice, not slice */
    this.setState({
      persons: persons
    });
  };

  switchPersonStatus = () => {
    var tempStatus = !this.state.personStatus;
    this.setState({
      personStatus: tempStatus
    });
  };

  render() {
    const style = {
      backgroundColor: "whizxxte",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    let person = null;
    let buttonText = "Show Person Details";

    if (this.state.personStatus) {
      buttonText = "Hide Person Details";
      person = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchPersonStatus}>
          {buttonText}
        </button>
        {person}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
