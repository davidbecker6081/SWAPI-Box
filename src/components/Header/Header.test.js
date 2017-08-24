import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Header from './Header';


describe('Header', () => {
  let clicked1 = jest.fn()
  let clicked2 = jest.fn()
  let clicked3 = jest.fn()
  let clicked4 = jest.fn()

  it('should exist', () => {
    const wrapper = shallow(<Header showPeople={ clicked1 } showPlanets={ clicked2 }
    showVehicles={ clicked3 }
    showFavorites={ clicked4 }
    favLength={ 5 }/>)

    expect(wrapper).toBeDefined()
  });

  it('should have 3 divs', () => {
    const wrapper = shallow(<Header showPeople={ clicked1 } showPlanets={ clicked2 }
    showVehicles={ clicked3 }
    showFavorites={ clicked4 }
    favLength={ 5 }/>)

    expect(wrapper.find('div').length).toEqual(3)
  });

  it('should have 4 components', () => {
    const wrapper = shallow(<Header showPeople={ clicked1 } showPlanets={ clicked2 }
    showVehicles={ clicked3 }
    showFavorites={ clicked4 }
    favLength={ 5 }/>)

    expect(wrapper.find('Button').length).toEqual(4)
  });

  it.skip('those buttons should be clickable', () => {
    const wrapper = shallow(<Header showPeople={ clicked1 } showPlanets={ clicked2 }
    showVehicles={ clicked3 }
    showFavorites={ clicked4 }
    favLength={ 5 }/>)

    expect(wrapper.find('Button').length).toEqual(4)

    let peopleButton = wrapper.find('people-btn')
    peopleButton.simulate('click')
    expect(peopleButton).toHaveBeenCalledTimes(1)

  })
});
