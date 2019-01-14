import React, { Component } from 'react';
import './app.css';
import Navbar from './Navbar.js';
import Card from './Card.js';
import Cardlist from './Cardlist.js';

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
        <div className="tc fl w-100">
          <Navbar />
          <h1 className="f3 white">List of Star Wars Films</h1>
          <Cardlist movies={films}/>
          <Card movies={films}/>
        </div>
      </div>
    );
  }
}

export default App;
