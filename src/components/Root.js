import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch, Redirect} from 'react-router-dom';

import store from '../configureStore'
import * as actionTypes from '../constants/actionTypes';
import history from '../history';

import SurveyForm from './survey-form/SurveyForm'
import ThankYouPage from './survey-form/ThankYouPage';
import SurveyBuilder from './suvey-builder/SurveyBuilder';
import SurveyResponses from './survey-responses/SurveyResponses';
import Header from './Header';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import SignUp from './auth/SignUp';
import RequireAuth from './auth/RequireAuth';

import '../styles/core/reset.css';
import '../styles/layouts/layout.css';
import '../styles/modules/buttons.css';
import '../styles/modules/typography.css';
import '../styles/modules/form.css';
import '../styles/modules/navigation.css';
import '../styles/modules/spinner.css';
import '../styles/pages/App.css';
import '../styles/pages/SurveyBuilder.css';
import '../styles/pages/SurveyForm.css';
import '../styles/pages/LoginForm.css';


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
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/sign-out" component={SignOut}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/builder" component={RequireAuth(SurveyBuilder)}/>
            <Route path="/survey" component={SurveyForm}/>
            <Route path="/responses" component={RequireAuth(SurveyResponses)}/>
            <Route path="/thank-you-page" component={ThankYouPage}/>
            <Redirect to="/builder"/>
          </Switch>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Root;