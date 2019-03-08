import React, { Component } from 'react';
import './App.css';
import axios from 'axios';




class App extends Component {
  state = {
    planetsAPI: [],
  }

  componentDidMount() {
    console.log('did mount!')
    this.getPlanets();
  }

  getPlanets () {
    axios.get('https://swapi.co/api/starships')
    .then(response => {
      this.setState ({
        planetsAPI: response.data.results
      })
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
       <h1>STAR WARS API</h1>
        <ul>
          {this.state.planetsAPI.map(starship => <li key={starship.name}>The {starship.name}, model: {starship.model} was built by {starship.manufacturer}</li>)}

        </ul>

      </div>
    );
  }
}

export default App;


