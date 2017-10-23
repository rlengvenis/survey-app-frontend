import React from 'react';
import {Route, Link} from 'react-router-dom';

import SurveyForm from '../survey-form/SurveyForm'
import SurveyBuilder from '../suvey-builder/SurveyBuilder';
import './App.css';

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link className="active" to="/">Survey Builder</Link></li>
          <li><Link to="/survey">Survey</Link></li>
          <li><Link to="/responses">Responses</Link></li>
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
