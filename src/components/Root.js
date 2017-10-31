import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import store from '../configureStore'
import history from '../history';

import App from './App';


const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <App />
        </ConnectedRouter>
    </Provider>
);

export default Root;