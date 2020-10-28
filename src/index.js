import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import keywords from './store/keywords/rootReducers';

import App from './App';

const store = createStore(keywords);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

