import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";

import SearchResults from '../SearchResults';
import NoResults from '../NoResults';
import Spinner from '../../Spinner/Spinner';
import ShowResults from '../ShowResults';
import { Provider } from 'react-redux';

let wrapped;
let store;
const mockStore = configureMockStore();

describe('Search Results - ', () => {
  beforeEach(() => {
    store = mockStore({});
    wrapped = shallow(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    )
  })
  it('renders no results', () => {
    wrapped.setProps({
      results: [],
      isLoading: false
    })
    expect(wrapped.find(<NoResults />)).toBeTruthy();
  });
  it('renders loading spinner', () => {
    wrapped.setProps({
      results: [],
      isLoading: true
    });
    expect(wrapped.find(<Spinner />)).toBeTruthy();
  })
  it('renders the results', () => {
    wrapped.setProps({
      results: [{ id: 1 }],
      isLoading: false
    })
    expect(wrapped.find(<ShowResults />)).toBeTruthy();
  })
});