class DataCleaner {
  constructor() {
    this.peopleData = {}
    this.planetData = {}
    this.vehicleData = {}
    this.scrollData = {}
  }

  updateURLs() {
    this.peopleURL = 'https://swapi.co/api/people/'
    this.planetURL = 'https://swapi.co/api/planets/'
    this.vehicleURL = 'https://swapi.co/api/vehicles/'
    this.scrollURL = 'https://swapi.co/api/films/'
  }

  apiCall() {
    this.updateURLs()

    const fetchPeopleData = fetch(this.peopleURL)
    .then(data => data.json())

    const fetchPlanetData = fetch(this.planetURL)
    .then(data => data.json())

    const fetchVehicleData = fetch(this.vehicleURL)
    .then(data => data.json())

    const fetchScrollData = fetch(this.scrollURL)
    .then(data => data.json())

    return new Promise((resolve, reject) => {
      Promise.all([fetchPeopleData, fetchPlanetData, fetchVehicleData, fetchScrollData])
      .then((fetchedData) => {
        this.peopleData = fetchedData[0]
        this.planetData = fetchedData[1]
        this.vehicleData = fetchedData[2]
        this.scrollData = fetchedData[3]
        resolve()
      })
      .catch((e) => {reject(e)})
    })
  }
}

export default DataCleaner
