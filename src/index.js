import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
reportWebVitals();
