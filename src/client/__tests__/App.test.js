import { App } from '../App';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    const store = configureStore();
    ReactDOM.render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
      div
    );
  });
});
