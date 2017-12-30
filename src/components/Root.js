import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch, Redirect} from 'react-router-dom';

import store from '../configureStore'
import * as actionTypes from '../constants/actionTypes';
import history from '../history';

import SurveyFormPage from './SurveyFormPage/SurveyFormPage'
import SurveyBuilderPage from './SurveyBuilderPage/SurveyBuilderPage';
import SurveyResponsesPage from './SurveyResponsesPage/SurveyResponsesPage';
import Header from './Header/Header';
import SignInPage from './auth/SignInPage';
import SignOutPage from './auth/SignOutPage';
import SignUpPage from './auth/SignUpPage';
import RequireAuth from './auth/RequireAuth';

import '../styles/core/reset.css';
import '../styles/layouts/layout.css';
import '../styles/modules/buttons.css';
import '../styles/modules/typography.css';
import '../styles/modules/form.css';
import '../styles/modules/navigation.css';
import '../styles/modules/spinner.css';
import '../styles/modules/error-message.css';
import '../styles/pages/App.css';
import '../styles/pages/SurveyBuilder.css';
import '../styles/pages/SurveyForm.css';
import '../styles/pages/LoginForm.css';
import '../styles/pages/SurveyResponses.css';


if (localStorage.getItem('token')) {
  store.dispatch({
    type: actionTypes.AUTH_SIGN_IN_SUCCESS
  });
}

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header/>
        <main className="container">
          <Switch>
            <Route path="/sign-in" component={SignInPage}/>
            <Route path="/sign-out" component={SignOutPage}/>
            <Route path="/sign-up" component={SignUpPage}/>
            <Route path="/builder" component={RequireAuth(SurveyBuilderPage)}/>
            <Route path="/survey" component={SurveyFormPage}/>
            <Route path="/responses" component={RequireAuth(SurveyResponsesPage)}/>
            <Redirect to="/builder"/>
          </Switch>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Root;