import React, { Component } from 'react';
import './app.css';
import Navbar from './Navbar.js';
import Card from './Card.js';

class App extends Component {
  async componentDidMount() {
    let response = await fetch('https://swapi.co/api/films');
    let data = response.json();
    console.log(data)
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="fl w-100">
          <h1 className="f3 tc white">List of Star Wars Films</h1>
        </div>
        <Card />
      </div>
    );
  }
}

export default App;
