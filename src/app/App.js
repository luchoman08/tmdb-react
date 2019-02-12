// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { PeopleService, MovieService }  from './core/services/';
import { Person, Movie } from './core/models';
import { Header } from './shared/layout';
type Props = {
  person: Person,
  movie: Movie
}
type State = Props;
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state  = { person: props.person, movie: props.movie };
    PeopleService.get(1)
        .then((person: Person) => {
          this.setState({person: person});
    });
    MovieService.get(8)
        .then( movie => {
          this.setState({movie: movie});
        });
  }
  static defaultProps: Props = {
    person: new Person(),
    movie: new Movie()
  };
  render() {

    return (
      <div className="App">
        <Header/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.person.name},  edit <code>src/App.js</code> and save to reload. The movie recomended today
            is <b>{this.state.movie.title}</b>
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
