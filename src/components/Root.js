import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from '../configureStore'

import App from './App';

import '../styles/reset.css';
import '../styles/typography.css';

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <App />
        </ConnectedRouter>
    </Provider>
);

export default Root;