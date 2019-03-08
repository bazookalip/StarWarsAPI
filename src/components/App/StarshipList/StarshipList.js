import React, { Component } from 'react';






class StarshipList extends Component {
    

    render() {
        return (
           
                <ul>
                    {this.props.planetsAPI.map(starship => <li key={starship.name}>The {starship.name}, model: {starship.model} was built by {starship.manufacturer}</li>)}

                </ul>

          
        );
    }
}

export default StarshipList;
