import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import CardContainer from './CardContainer';
import mockPeople from './mockPeople'

describe('Card Container', () => {
  const array = mockPeople;
  const addRemoveFavs = jest.fn()
  const wrapper = shallow(<CardContainer info={ array } addRemoveFavs={ addRemoveFavs } />)

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have one div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should have 10 people Cards per API called', () => {
    expect(wrapper.find('Card').length).toEqual(10)
  })
})
