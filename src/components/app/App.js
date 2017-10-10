import React from 'react';
import {Route, Link} from 'react-router-dom';

import Survey from '../survey-form/SurveyForm'
import SurveyBuilder from '../suvey-builder/SurveyBuilder';
import './App.css';
import firebase from '../../firebase';

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
      <Route exact path="/survey" component={Survey}/>
    </main>
  </div>
);

const itemsRef = firebase.database().ref('items');

console.log('itemsRef', itemsRef);

const item = {
  title: 'test',
  user: 'test'
};

// itemsRef.push(item);


export default App;
