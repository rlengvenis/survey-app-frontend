import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import SurveyForm from './survey-form/SurveyForm'
import SurveyBuilder from './suvey-builder/SurveyBuilder';

import '../styles/core/reset.css';
import '../styles/layouts/layout.css';
import '../styles/modules/buttons.css';
import '../styles/modules/typography.css';
import '../styles/modules/form.css';
import '../styles/modules/navigation.css';
import '../styles/pages/App.css';
import '../styles/pages/SurveyBuilder.css';
import '../styles/pages/Survey.css';


const App = () => (
  <div>
    <header className="app__header">
      <nav>
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink activeClassName="active" exact to="/">Survey Builder</NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink activeClassName="active" to="/survey">Survey</NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink activeClassName="active" to="/responses">Responses</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <main className="container">
      <Route exact path="/" component={SurveyBuilder}/>
      <Route exact path="/survey" component={SurveyForm}/>
    </main>
  </div>
);

export default App;
