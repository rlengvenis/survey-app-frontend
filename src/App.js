import React from 'react';
import { Route, Link } from 'react-router-dom';
import Questions from './containers/Questions'
import About from './containers/About'
import logo from './logo.svg';
import './styles/App.css';
import firebase from './firebase';

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link className="active" to="/">Questions</Link></li>
          <li><Link to="/responses">Responses</Link></li>
          <li><Link to="/quoestionnaire">Questionnaire</Link></li>
        </ul>
      </nav>
    </header>
    
    <main className="container">
      <Route exact path="/" component={Questions} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

const itemsRef = firebase.database().ref('items');

const item = {
  title: 'test',
  user: 'test'
};

itemsRef.push(item);

export default App;
