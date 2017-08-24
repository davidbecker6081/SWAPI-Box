import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Card from './Card';

describe('Card', () => {
  const addRemoveFavs = jest.fn()
  it('should exist', () => {
    const item = {
      hasBeenSelected: 'Remove',
      gender: 'female',
    }
    const wrapper = shallow(<Card key={1} item={ item } addRemoveFavs={addRemoveFavs}/>)

    expect(wrapper).toBeDefined()
  });

  it('should have two divs since we mocked out item prop to have a gender', () => {
    const item = {
      hasBeenSelected: 'Remove',
      gender: 'female',
    }
    const wrapper = shallow(<Card key={1} item={item} addRemoveFavs={addRemoveFavs}/>)

    expect(wrapper.find('div').length).toEqual(2)

  });

  it('should have a h3 title since we mocked out item prop to have a gender', () => {
    const item = {
      hasBeenSelected: 'Remove',
      gender: 'female',
    }
    const wrapper = shallow(<Card key={1} item={item} addRemoveFavs={addRemoveFavs}/>)

    expect(wrapper.find('h3').length).toEqual(1)
  });

  it('should have 4 p tags since we mocked it out as a person', () => {
    const item = {
      hasBeenSelected: 'Remove',
      gender: 'female',
    }
    const wrapper = shallow(<Card key={1} item={item} addRemoveFavs={addRemoveFavs}/>)

    expect(wrapper.find('p').length).toEqual(4)
  });

  it('should have 8 p tags since we mocked it out as a planet', () => {
    const item = {
      hasBeenSelected: 'Remove',
      gravity: 1.9,
    }
    const wrapper = shallow(<Card key={1} item={item} addRemoveFavs={addRemoveFavs}/>)

    expect(wrapper.find('p').length).toEqual(8)
  });

  it('should have 8 p tags since we mocked it out as a vehicle', () => {
    const item = {
      hasBeenSelected: 'Remove',
      crew: 90,
    }
    const wrapper = shallow(<Card key={1} item={item} addRemoveFavs={addRemoveFavs}/>)

    expect(wrapper.find('p').length).toEqual(8)
  });

  it('should have 1 button component', () => {
    const item = {
      hasBeenSelected: 'Remove',
      crew: 90,
    }
    const wrapper = shallow(<Card key={1} item={item} addRemoveFavs={addRemoveFavs}/>)

    expect(wrapper.find('Button').length).toEqual(1)
  })
});
