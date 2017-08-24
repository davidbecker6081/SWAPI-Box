import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Scroll from './Scroll';
import ScrollMock from './ScrollMock';

describe('Scroll', () => {
  let mockData =[

  ]

  it('should exist', () => {
    const wrapper = shallow(<Scroll scrollArray={ScrollMock} />);

    expect(wrapper).toBeDefined()
  });

  it('should have 9 total divs, 2 default and 7 from the scrollArray', () => {
    const wrapper = shallow(<Scroll scrollArray={ScrollMock} />);

    expect(wrapper.find('div').length).toEqual(9)
  });

  it('should have 7 p tags from the scrollArray', () => {
    const wrapper = shallow(<Scroll scrollArray={ScrollMock} />);
    expect(wrapper.find('p').length).toEqual(7)
  })

})
