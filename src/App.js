import React, { Component } from 'react';
import './App.css';
import DataCleaner from './Helpers/DataCleaner'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined
    }
  }

//onClick of button, we pass the text as the api we're trying to call and put it into the url

grabStarWarsData() {
  let newDataObj = new DataCleaner
  newDataObj.apiCall()
  .then(() => {
    this.setState({
      data: newDataObj
    })
  })
  .catch((e) => {
    console.log('API ERROR: ', e)
  })
}

  render() {
    return (
      <div className="App">
        Hey There Hot Stuff
        <button onClick={this.grabStarWarsData.bind(this)}>Click ME</button>
      </div>
    );
  }
}

export default App;
