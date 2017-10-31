import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import SurveyForm from './survey-form/SurveyForm'
import SurveyBuilder from './suvey-builder/SurveyBuilder';
import Header from './Header';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import SignUp from './auth/SignUp';

import '../styles/core/reset.css';
import '../styles/layouts/layout.css';
import '../styles/modules/buttons.css';
import '../styles/modules/typography.css';
import '../styles/modules/form.css';
import '../styles/modules/navigation.css';
import '../styles/pages/App.css';
import '../styles/pages/SurveyBuilder.css';
import '../styles/pages/SurveyForm.css';


const App = () => (
  <div>
    <Header />

    <main className="container">
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/signout" component={SignOut}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/" component={SurveyBuilder}/>
      <Route exact path="/survey" component={SurveyForm}/>
    </main>
  </div>
);

export default App;
