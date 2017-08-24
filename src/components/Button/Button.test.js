import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Button from './Button';

describe('Button', () => {
  const clickMe = jest.fn()
  it('should exist', () => {
    const wrapper = shallow(<Button givenClass={'vehicle-btn'}
    clickEvent={ clickMe }/>)

    expect(wrapper).toBeDefined()
  });

  it('each Button component should contain 1 button element', () => {
    const wrapper = shallow(<Button givenClass={'vehicle-btn'}
    clickEvent={ clickMe }/>)

    expect(wrapper.find('button').length).toEqual(1)
  });

  it('each button element should be clickable and fire a function', () => {
    const wrapper = shallow(<Button givenClass={'vehicle-btn'}
    clickEvent={ clickMe }/>)

    expect(wrapper.find('button').length).toEqual(1)

    let button = wrapper.find('button')
    button.simulate('click')
    expect(clickMe).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(clickMe).toHaveBeenCalledTimes(2)
    button.simulate('click')
    expect(clickMe).toHaveBeenCalledTimes(3)
    button.simulate('click')
  });
});
