import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form'

import surveysReducer from './surveysReducer';
import questionsReducer from './questionsReducer';
import answerOptionsReducer from './answerOptionsReducer';
import answersReducer from './answersReducer';
import authReducer from './authReducer';

export default combineReducers({
  surveys: surveysReducer,
  questions: questionsReducer,
  answerOptions: answerOptionsReducer,
  answers: answersReducer,
  form: formReducer,
  auth: authReducer,
  routing: routerReducer
});