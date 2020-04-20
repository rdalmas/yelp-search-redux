import React from 'react';
import { shallow } from 'enzyme';

import NoResults from '../NoResults';

let wrapped;

describe('No Results - ', () => {
  beforeEach(() => {
    wrapped = shallow(<NoResults />)
  })
  it('renders the', () => { 
    expect(wrapped.find('h2').text()).toEqual("No results found");
  });
});