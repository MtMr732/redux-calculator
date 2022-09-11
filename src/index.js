import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { legacy_createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducers';

const Store = legacy_createStore(reducer);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);