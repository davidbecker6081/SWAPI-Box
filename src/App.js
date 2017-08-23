import React, { Component } from 'react';
import './App.css';
import DataCleaner from './Helpers/DataCleaner'
import CardContainer from './components/CardContainer/CardContainer'
import Scroll from './components/Scroll/Scroll'

class App extends Component {
  constructor() {
    super();
    this.dataCleaner = new DataCleaner
    this.state = {
      data: undefined,
      peopleArray: [],
      planetsArray: [],
      vehicleArray: [],
      scrollData: []
    }
    this.grabStarWarsData = this.grabStarWarsData.bind(this)
  }

//onClick of button, we pass the text as the api we're trying to call and put it into the url

grabStarWarsData() {
  this.dataCleaner.apiCall()
  .then(() => {
    this.setState({
      data: this.dataCleaner,
      scrollData: this.dataCleaner.scrollData.results
    })
  })
  .catch((e) => {
    console.log('API ERROR: ', e)
  })
}

componentDidMount() {
  this.grabStarWarsData()
}

showPeople() {
  const { results } = this.state.data.peopleData
  let homeworldPromises = this.state.data.peopleData.results.map((person) =>
    fetch(person.homeworld)
        .then(planet => planet.json())
    )
  let updatedArrayOfPeople = Promise.all(homeworldPromises)
    .then(array => array.map((planet, i) => {
      return Object.assign({planet: planet.name, population: planet.population}, this.state.data.peopleData.results[i])
    })
  ).then(result => this.getSpecies(result))
}

getSpecies(result) {
  let speciesList = result.map((person) => person.species[0])

  let speciesPromises = speciesList.map((species) =>
    fetch(species)
      .then(data => data.json())
    )

  let speciesArray = Promise.all(speciesPromises)
    .then(arrayOfSpecies => arrayOfSpecies.map((species, i) => {
      return Object.assign({}, result[i], {species: species.name})
    }))
    .then(result2 => this.setState({
      peopleArray: result2
    }))
}

showPlanets() {
  const resArray = []
  const { results } = this.state.data.planetData
  const residentsArray = results.map((planet, i) => {
    const linkArray = planet.residents.map((link) => {
      return fetch(link)
                  .then(data => data.json())

    })
    return Promise.all(linkArray)
    .then(thing => {
      return Object.assign(planet, {residents: thing.map((person) => person.name)})
    }).then(result => result)
  })

  Promise.all(residentsArray)
  .then(response => this.setState({
    planetsArray: response
  }))
}

showVehicles() {
  this.setState({
    vehicleArray: this.state.data.vehicleData.results
  })
}

  render() {
    return (
      <div className="App">
        Hey There Hot Stuff
        <button onClick={ this.showPeople.bind(this) }>People</button>
        <button onClick={ this.showPlanets.bind(this) }>Planets</button>
        <button onClick={ this.showVehicles.bind(this) }>Vehicles</button>
        <CardContainer info={ this.state.peopleArray } />
        <CardContainer info={ this.state.planetsArray } />
        <CardContainer info={ this.state.vehicleArray } />
        <Scroll scrollArray={this.state.scrollData} />
      </div>
    );
  }
}

export default App;
