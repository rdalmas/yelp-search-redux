import React from 'react';
import { shallow } from 'enzyme';

import ShowResults from '../ShowResults';

let wrapped;

describe('Show Results - ', () => {
  beforeEach(() => {
    wrapped = shallow(<ShowResults />)
  })
  it('renders the results', () => { 
    expect(wrapped.find('h2').text()).toEqual("Results");
  });
});