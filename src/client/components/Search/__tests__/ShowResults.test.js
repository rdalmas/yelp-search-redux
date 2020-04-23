import React from 'react';
import { shallow } from 'enzyme';

import ShowResults from '../ShowResults';
import Card from '../../Cards/Card';

let wrapped;

const props = {
  results: [{
    id: 1,
    name: "Restaurant",
    address: "Rome str. 123, Germany",
    imageUrl: "https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home.jpg",
    imageAlt: "W3 test image",
    phone: "+49 173 9974554",
    link: "www.google.com",
    rating: 5,
    reviewCount: 200,
    isClosed: false
  }]
}

describe('Show Results - ', () => {
  beforeEach(() => {
    wrapped = shallow(<ShowResults results={props.results} />)
  })
  it('renders the cards', () => { 
    expect(wrapped.find(<Card />)).toBeTruthy();
  });
});