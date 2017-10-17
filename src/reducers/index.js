import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import survey from './survey';
import questions from './questions';
import answerOptions from './answerOptions';
import surveyForm from './surveyForm';
import answers from './answers';

export default combineReducers({
  survey,
  questions,
  answerOptions,
  answers,
  surveyForm,
  routing: routerReducer
});