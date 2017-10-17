import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {
  survey: {
    name: 'Apklausa',
    description: 'Apie save patį',
    questionIds: [
      '9421686c-a31a-4efd-9a9c-5e4d67d965e2',
      'e5461251-e47c-4ff9-abc4-af650ac6935e'
    ]
  },
  questions: {
    '9421686c-a31a-4efd-9a9c-5e4d67d965e2': {
      id: '9421686c-a31a-4efd-9a9c-5e4d67d965e2',
      title: 'Kokia mano lytis?',
      questionType: 1,
      answerOptionIds: []
    },
    'e5461251-e47c-4ff9-abc4-af650ac6935e': {
      id: 'e5461251-e47c-4ff9-abc4-af650ac6935e',
      title: 'Kiek man metų?',
      questionType: 3,
      answerOptionIds: [
        '25ca2447-609a-45af-b545-cc4c96e48862',
        '17adb226-3c5f-4151-a112-d4303f2a27c3'
      ]
    }
  },
  answerOptions: {
    '25ca2447-609a-45af-b545-cc4c96e48862': {
      id: '25ca2447-609a-45af-b545-cc4c96e48862',
      title: '2 metai'
    },
    '17adb226-3c5f-4151-a112-d4303f2a27c3': {
      id: '17adb226-3c5f-4151-a112-d4303f2a27c3',
      title: '3 metai'
    }
  }
};

export const history = createHistory();

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
  {}, //initialState,
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
);

export default store;


