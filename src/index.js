import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import {rootReducer} from './redux/rootReducer';
import App from './App';
import {forbiddenWordsMiddleware} from './redux/middleware';
import {sagaWatcher} from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );

const root = ReactDOM.createRoot(document.getElementById('root'));

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
  <App />
</Provider>
)
root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);
