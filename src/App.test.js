import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';
import mockData from './mockData';
import mockFilms from './mockFilms';
import mockPeople from './mockPeople';
import mockPlanets from './mockPlanets';
import mockVehicles from './mockVehicles';
import mockPerson1 from './mockPerson1';
import mockPerson2 from './mockPerson1';
import mockPerson3 from './mockPerson1';
import mockPerson4 from './mockPerson1';
import mockPerson5 from './mockPerson1';
import mockPerson6 from './mockPerson1';
import mockPerson7 from './mockPerson1';
import mockPerson8 from './mockPerson1';
import mockPerson9 from './mockPerson1';
import mockPerson10 from './mockPerson1';
import mockPlanet1 from './mockPlanet1';
import mockPlanet2 from './mockPlanet1';
import mockPlanet3 from './mockPlanet1';
import mockPlanet4 from './mockPlanet1';
import mockPlanet5 from './mockPlanet1';
import mockPlanet6 from './mockPlanet1';
import mockPlanet7 from './mockPlanet1';
import mockPlanet8 from './mockPlanet1';
import mockPlanet9 from './mockPlanet1';
import mockPlanet10 from './mockPlanet1';
import mockVehicle1 from './mockVehicle1';
import mockVehicle2 from './mockVehicle1';
import mockVehicle3 from './mockVehicle1';
import mockVehicle4 from './mockVehicle1';
import mockVehicle5 from './mockVehicle1';
import mockVehicle6 from './mockVehicle1';
import mockVehicle7 from './mockVehicle1';
import mockVehicle8 from './mockVehicle1';
import mockVehicle9 from './mockVehicle1';
import mockVehicle10 from './mockVehicle1';


describe('App', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {

      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }
    global.fetch = jest.fn()

  it('renders without crashing', async () => {
    const div = document.createElement('div');
    const mockFn = jest.fn();


    fetchMock.get('https://swapi.co/api/people/', {status: 200, body: mockPeople })
    fetchMock.get('https://swapi.co/api/planets/', {status: 200, body: mockPlanets })
    fetchMock.get('https://swapi.co/api/vehicles/', {status: 200, body: mockVehicles })
    fetchMock.get('https://swapi.co/api/films/', {status: 200, body: mockFilms })

    const wrapper = mount(<App grabStarWarsData={mockFn}/>)

    await resolveAfter2Seconds()

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('https://swapi.co/api/people/'))
    expect(fetchMock.called('https://swapi.co/api/planet/'))
    expect(fetchMock.called('https://swapi.co/api/vehicles/'))
    expect(fetchMock.called('https://swapi.co/api/films/'))

  });

  it('should fetch the people data when the people button is pushed', async () => {
    const div = document.createElement('div');
    const mockFn = jest.fn();


    fetchMock.get('https://swapi.co/api/people/', {status: 200, body: mockPeople })
    fetchMock.get('https://swapi.co/api/planets/', {status: 200, body: mockPlanets })
    fetchMock.get('https://swapi.co/api/vehicles/', {status: 200, body: mockVehicles })
    fetchMock.get('https://swapi.co/api/films/', {status: 200, body: mockFilms })

    const wrapper = mount(<App grabStarWarsData={mockFn}/>)

    wrapper.setState({
      data: mockData
    })

    fetchMock.get('https://swapi.co/api/people/1/', {status: 200, body: mockPerson1})
    fetchMock.get('https://swapi.co/api/people/2/', {status: 200, body: mockPerson2})
    fetchMock.get('https://swapi.co/api/people/3/', {status: 200, body: mockPerson3})
    fetchMock.get('https://swapi.co/api/people/4/', {status: 200, body: mockPerson4})
    fetchMock.get('https://swapi.co/api/people/5/', {status: 200, body: mockPerson5})
    fetchMock.get('https://swapi.co/api/people/6/', {status: 200, body: mockPerson6})
    fetchMock.get('https://swapi.co/api/people/7/', {status: 200, body: mockPerson7})
    fetchMock.get('https://swapi.co/api/people/8/', {status: 200, body: mockPerson8})
    fetchMock.get('https://swapi.co/api/people/9/', {status: 200, body: mockPerson9})
    fetchMock.get('https://swapi.co/api/people/10/', {status: 200, body: mockPerson10})

    await resolveAfter2Seconds()

    // setTimeout(() => {
    //   wrapper.instance().showPeople()
    // }, 2000)
    fetchMock.flush()
    .then(() => { wrapper.instance().showPeople() } )
    .then(() => {
      expect(wrapper.state().peopleArray.length).toEqual(10)
    expect(fetchMock.lastCall()).toEqual('booty')
  })
    // setTimeout(() => {
    //   expect(wrapper.state().peopleArray.length).toEqual(10)
    //   expect(fetchMock.lastCall()).toEqual('booty')
    // }, 5000)

  });

  it('should fetch the planet data when the planet button is pushed', async () => {
    const div = document.createElement('div');
    const mockFn = jest.fn();


    fetchMock.get('https://swapi.co/api/people/', {status: 200, body: mockPeople })
    fetchMock.get('https://swapi.co/api/planets/', {status: 200, body: mockPlanets })
    fetchMock.get('https://swapi.co/api/vehicles/', {status: 200, body: mockVehicles })
    fetchMock.get('https://swapi.co/api/films/', {status: 200, body: mockFilms })

    const wrapper = mount(<App grabStarWarsData={mockFn}/>)

    wrapper.setState({
      data: mockData
    })

    fetchMock.get('https://swapi.co/api/planet/1/', {status: 200, body: mockPlanet1})
    fetchMock.get('https://swapi.co/api/planet/2/', {status: 200, body: mockPlanet2})
    fetchMock.get('https://swapi.co/api/planet/3/', {status: 200, body: mockPlanet3})
    fetchMock.get('https://swapi.co/api/planet/4/', {status: 200, body: mockPlanet4})
    fetchMock.get('https://swapi.co/api/planet/5/', {status: 200, body: mockPlanet5})
    fetchMock.get('https://swapi.co/api/planet/6/', {status: 200, body: mockPlanet6})
    fetchMock.get('https://swapi.co/api/planet/7/', {status: 200, body: mockPlanet7})
    fetchMock.get('https://swapi.co/api/planet/8/', {status: 200, body: mockPlanet8})
    fetchMock.get('https://swapi.co/api/planet/9/', {status: 200, body: mockPlanet9})
    fetchMock.get('https://swapi.co/api/planet/10/', {status: 200, body: mockPlanet10})

    await resolveAfter2Seconds()

    setTimeout(() => {
      wrapper.instance().showPlanets()
    }, 2000)

    setTimeout(() => {
      expect(wrapper.state().planetsArray.length).toEqual(10)
    }, 5000)

  });

  it('should fetch the vehicles data when the vehicle button is pushed', async () => {
    const div = document.createElement('div');
    const mockFn = jest.fn();


    fetchMock.get('https://swapi.co/api/people/', {status: 200, body: mockPeople })
    fetchMock.get('https://swapi.co/api/planets/', {status: 200, body: mockPlanets })
    fetchMock.get('https://swapi.co/api/vehicles/', {status: 200, body: mockVehicles })
    fetchMock.get('https://swapi.co/api/films/', {status: 200, body: mockFilms })

    const wrapper = mount(<App grabStarWarsData={mockFn}/>)

    wrapper.setState({
      data: mockData
    })

    fetchMock.get('https://swapi.co/api/vehicle/1/', {status: 200, body: mockVehicle1})
    fetchMock.get('https://swapi.co/api/vehicle/2/', {status: 200, body: mockVehicle2})
    fetchMock.get('https://swapi.co/api/vehicle/3/', {status: 200, body: mockVehicle3})
    fetchMock.get('https://swapi.co/api/vehicle/4/', {status: 200, body: mockVehicle4})
    fetchMock.get('https://swapi.co/api/vehicle/5/', {status: 200, body: mockVehicle5})
    fetchMock.get('https://swapi.co/api/vehicle/6/', {status: 200, body: mockVehicle6})
    fetchMock.get('https://swapi.co/api/vehicle/7/', {status: 200, body: mockVehicle7})
    fetchMock.get('https://swapi.co/api/vehicle/8/', {status: 200, body: mockVehicle8})
    fetchMock.get('https://swapi.co/api/vehicle/9/', {status: 200, body: mockVehicle9})
    fetchMock.get('https://swapi.co/api/vehicle/10/', {status: 200, body: mockVehicle10})

    await resolveAfter2Seconds()

    setTimeout(() => {
      wrapper.instance().showVehicles()
    }, 2000)

    setTimeout(() => {
      expect(wrapper.state().vehiclesArray.length).toEqual(10)
    }, 5000)

  });

  it('should exist', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toBeDefined()
  });

  it('should not display its card container components by default', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('CardContainer').length).toEqual(0)

  });

  it('Should only display one card container at a time.', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('CardContainer').length).toEqual(0)

    wrapper.setState({display: 'people'})
    expect(wrapper.find('CardContainer').length).toEqual(1)

    wrapper.setState({display: 'planets'})
    expect(wrapper.find('CardContainer').length).toEqual(1)


    wrapper.setState({display: 'vehicles'})
    expect(wrapper.find('CardContainer').length).toEqual(1)

  })

  it('should run the scroll component on page load, until a button is pushed', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Scroll').length).toEqual(1)
    wrapper.setState({display: 'vehicles'})
    expect(wrapper.find('Scroll').length).toEqual(0)

  });

});
