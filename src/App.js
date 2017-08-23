import React, { Component } from 'react';
import './App.css';
import DataCleaner from './Helpers/DataCleaner';
import CardContainer from './components/CardContainer/CardContainer';
import Scroll from './components/Scroll/Scroll';
// import Button from './components/Button/Button';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.dataCleaner = new DataCleaner
    this.state = {
      data: undefined,
      peopleArray: [],
      planetsArray: [],
      vehicleArray: [],
      scrollData: [],
      favorites: [],
      display: 'welcome'
    }
    this.grabStarWarsData = this.grabStarWarsData.bind(this)
  }

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

addToFavorites(card) {
  console.log(card);
  let isInFavArray = this.state.favorites.filter((favCard) => favCard.name === card.name)

  if (isInFavArray.length === 0) {
    card.hasBeenSelected = true
    const newFavArray = [...this.state.favorites, card]

    this.setState({
      favorites: newFavArray
    })
  }
}

removeFromFavorites(card) {
  console.log(card);
  card.hasBeenSelected = false
  const newFavArray = this.state.favorites.filter((favCard) => favCard.name !== card.name)

  this.setState({
    favorites: newFavArray
  })
}

showFavorites() {
  this.setState({
    display: 'favorites'
  })
}

showPeople() {
  if (this.state.peopleArray.length === 0) {
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
  } else {
    this.setState({
      display: 'people'
    })
  }
}

getSpecies(result) {
  let speciesList = result.map((person) => person.species[0])

  let speciesPromises = speciesList.map((species) =>
    fetch(species)
      .then(data => data.json())
    )

  let speciesArray = Promise.all(speciesPromises)
    .then(arrayOfSpecies => arrayOfSpecies.map((species, i) => {
      return Object.assign({}, result[i], {species: species.name}, {hasBeenSelected: false})
    }))
    .then(result2 => this.setState({
      peopleArray: result2,
      display: 'people'
    }))
}

showPlanets() {
  if (this.state.planetsArray.length === 0) {
    let resArray = []
    const { results } = this.state.data.planetData
    let residentsArray = results.map((planet, i) => {
      let linkArray = planet.residents.map((link) => {
        return fetch(link)
                    .then(data => data.json())

      })
      return Promise.all(linkArray)
      .then(thing => {
        return Object.assign(planet, {residents: thing.map((person) => person.name)}, {hasBeenSelected: false})
      }).then(result => result)
    })

    Promise.all(residentsArray)
    .then(response => this.setState({
      planetsArray: response,
      display: 'planets'
    }))
  } else {
    this.setState({
      display: 'planets'
    })
  }
}

showVehicles() {
  if (this.state.vehicleArray.length === 0) {
    const { results } = this.state.data.vehicleData
    Object.keys(results).map((planet, i) => results[i].hasBeenSelected = false)
    this.setState({
      vehicleArray: results,
      display: 'vehicles'
    })
  } else {
    this.setState({
      display: 'vehicles'
    })
  }
}

  render() {
    return (
      <div className="App">
        <Header showPeople={ this.showPeople.bind(this) } showPlanets={ this.showPlanets.bind(this) }
        showVehicles={ this.showVehicles.bind(this) }
        showFavorites={this.showFavorites.bind(this) }
        />
        {/*<div className='header'>
        SWAPI-BOX
          <Button clickEvent={this.showPeople.bind(this)} btnText={'People'} />
          <Button clickEvent={this.showPlanets.bind(this)} btnText={'Planets'} />
          <Button clickEvent={this.showVehicles.bind(this)} btnText={'Vehicles'} />
          <Button clickEvent={this.showFavorites.bind(this)} btnText={'Favorites'} />
        </div>*/}

        {this.state.display === 'people' && <CardContainer info={ this.state.peopleArray } addToFavorites={this.addToFavorites.bind(this)} removeFromFavorites={this.removeFromFavorites.bind(this)} />
        }

        {this.state.display === 'planets' && <CardContainer info={ this.state.planetsArray } addToFavorites={this.addToFavorites.bind(this)} removeFromFavorites={this.removeFromFavorites.bind(this)} />
        }

        {this.state.display === 'vehicles' && <CardContainer info={ this.state.vehicleArray } addToFavorites={this.addToFavorites.bind(this)} removeFromFavorites={this.removeFromFavorites.bind(this)} />
        }

        {this.state.display === 'favorites' &&
          <CardContainer info={ this.state.favorites } addToFavorites={this.addToFavorites.bind(this)} removeFromFavorites={this.removeFromFavorites.bind(this)} />
        }


        <Scroll scrollArray={this.state.scrollData} />
      </div>
    );
  }
}

export default App;
