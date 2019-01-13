import React, { Component } from 'react';
import './app.css';
import Navbar from './Navbar.js';
import Card from './Card.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: {},
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(movies => {this.setState({films: movies.results})})
  }

  render() {
    const { films } = this.state;
    // console.log( films[0] )

    return (!films.length) ?
    <h1 className="tc white">Loading</h1> :
    (
      <div>
        <Navbar />
        <div className="fl w-100">
          <h1 className="f3 tc white">List of Star Wars Films</h1>
        </div>
        <Card movies={films}/>
      </div>
    );
  }
}

export default App;
