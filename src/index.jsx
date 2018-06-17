import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './reducers/reducers'
import Promise from 'core-js/es6/promise';
import assign from 'core-js/fn/object/assign';
import fetch from 'whatwg-fetch';
import App from './components/App'
import './styles/main.scss';

const store = createStore(reducer, devToolsEnhancer());

// render app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);