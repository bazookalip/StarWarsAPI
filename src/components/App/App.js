import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import StarshipList from './StarshipList/StarshipList'



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
        
         <StarshipList planetsAPI = {this.state.planetsAPI} />
      

      </div>
    );
  }
}

export default App;


