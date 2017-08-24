import React, { Component } from 'react';
import './App.css';
import DataCleaner from './Helpers/DataCleaner';
import CardContainer from './components/CardContainer/CardContainer';
import Scroll from './components/Scroll/Scroll';
// import Button from './components/Button/Button';
import Header from './components/Header/Header';
import LoadingVideo from './components/Header/assets/loading.mp4'
import LoadingText from './components/Header/assets/load-text.mp4'

class App extends Component {
  constructor() {
    super()
    this.dataCleaner = new DataCleaner()
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
  this.setState({
    display: 'welcome'
  })
}

addRemoveFavs(card) {
  console.log(card);
  let favArray = this.state.favorites
  let isInFavArray = favArray.includes(card)
  if (isInFavArray) {
    card.hasBeenSelected = false;
    let index = favArray.indexOf(card)
    favArray.splice(index, 1)
    this.setState({
      favorites: favArray
    })

  }
  else {
    card.hasBeenSelected = true
    const newFavArray = [...this.state.favorites, card]

    this.setState({
      favorites: newFavArray
    })
  }
}

showFavorites() {
  this.setState({
    display: 'favorites'
  })
}

showPeople() {
  this.setState({
    display: 'loading'
  })

  if (this.state.peopleArray.length === 0 && this.state.data.peopleData) {
    const { results } = this.state.data.peopleData
    let homeworldPromises = results.map((person) =>
      fetch(person.homeworld)
          .then(planet => planet.json())
      )
    Promise.all(homeworldPromises)
      .then(array => array.map((planet, i) => {
        return Object.assign({planet: planet.name, population: planet.population}, this.state.data.peopleData.results[i])
      })
    ).then(result => this.getSpecies(result))
  } else {
    this.setState({
      display: 'people'
    })

    console.log('people', this.state.peopleArray);
  }
}

getSpecies(result) {
  let speciesList = result.map((person) => person.species[0])

  let speciesPromises = speciesList.map((species) =>
    fetch(species)
      .then(data => data.json())
    )

  Promise.all(speciesPromises)
    .then(arrayOfSpecies => arrayOfSpecies.map((species, i) => {
      return Object.assign({}, result[i], {species: species.name}, {hasBeenSelected: false})
    }))
    .then(result2 => this.setState({
      peopleArray: result2,
      display: 'people'
    }))
}

showPlanets() {
  this.setState({
    display: 'loading'
  })

  if (this.state.planetsArray.length === 0 && this.state.data.planetData) {
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
    console.log(this.state.planetsArray);
  }
}

showVehicles() {
  this.setState({
    display: 'loading'
  })

  if (this.state.vehicleArray.length === 0 && this.state.data.vehicleData) {
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
    console.log(this.state.vehicleArray);
  }
}

  render() {
    return (
      <div className="App">
        <Header showPeople={ this.showPeople.bind(this) } showPlanets={ this.showPlanets.bind(this) }
        showVehicles={ this.showVehicles.bind(this) }
        showFavorites={this.showFavorites.bind(this) }
        favLength={ this.state.favorites.length }
        />

        {this.state.display === 'people' && <CardContainer info={ this.state.peopleArray } addRemoveFavs={this.addRemoveFavs.bind(this)} />
        }

        {this.state.display === 'planets' && <CardContainer info={ this.state.planetsArray } addRemoveFavs={this.addRemoveFavs.bind(this)} />
        }

        {this.state.display === 'vehicles' && <CardContainer info={ this.state.vehicleArray } addRemoveFavs={this.addRemoveFavs.bind(this)} />
        }

        {this.state.display === 'favorites' &&
          <CardContainer info={ this.state.favorites } addRemoveFavs={this.addRemoveFavs.bind(this)} />
        }
        {this.state.display === 'welcome' &&
        <Scroll scrollArray={this.state.scrollData} />
        }
        {this.state.display === 'loading' &&
          <div className="loading">
            <video poster={ LoadingVideo } className="background-video" muted loop autoPlay playsInline>
              <source src={ LoadingVideo} type="video/mp4"></source>
            </video>
            <video poster={ LoadingText } className="load-text" muted loop autoPlay playsInline>
              <source src={ LoadingText } type="video/mp4"></source>
            </video>

          </div>}
      </div>
    );
  }
}

export default App;
