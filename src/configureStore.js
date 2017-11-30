import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import history from './history';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [
  thunk,
  routerMiddleware(history)
];

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const store = createStore(
  rootReducer,
  {}, //initialState
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
);

export default store;


