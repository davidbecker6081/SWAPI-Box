import React, { Component } from 'react';
import './App.css';
import DataCleaner from './Helpers/DataCleaner'

class App extends Component {
  constructor() {
    super();
    this.dataCleaner = new DataCleaner
    this.state = {
      data: this.grabStarWarsData()
    }
    this.grabStarWarsData = this.grabStarWarsData.bind(this)
  }

//onClick of button, we pass the text as the api we're trying to call and put it into the url

grabStarWarsData() {
  // let newDataObj = new DataCleaner
  this.dataCleaner.apiCall()
  .then(() => {
    this.setState({
      data: this.dataCleaner,
    })
  })
  .catch((e) => {
    console.log('API ERROR: ', e)
  })
}

showPeople() {
  // this.dataCleaner.updatePeopleData()
  this.setState({
    peopleArray: this.state.data.peopleData
  })
}

  render() {
    return (
      <div className="App">
        Hey There Hot Stuff
        <button>Click ME</button>
        <button onClick={this.showPeople.bind(this)}>People</button>
      </div>
    );
  }
}

export default App;
