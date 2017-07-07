import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import ShoppingList from './components/ShoppingList';
import configureStore from './lib/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ShoppingList />
  </Provider>,
  document.getElementById('root')
);
