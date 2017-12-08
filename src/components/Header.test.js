import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    expect(shallow(<Header/>).find('.navigation__link').exists()).to.equal(true);
  });
});


