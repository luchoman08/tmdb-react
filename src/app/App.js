// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PeopleService }  from './core/services/PeopleService';
import { Person } from './core/models';
type Props = {
  person: Person
}
type State = Props;
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state  = { person: props.person };
    PeopleService.get(1)
        .then((person: Person) => {
          this.setState({person: person});
    });
  }
  static defaultProps: Props = {
    person: new Person('Luis Gerardo')
  };
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.person.name},  edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
