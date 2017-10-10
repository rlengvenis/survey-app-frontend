import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import survey from './survey';
import surveyQuestions from './surveyQuestions';
import answerOptions from './answerOptions';
import surveyForm from './surveyForm';
import surveyAnswers from './surveyAnswers';

export default combineReducers({
  survey,
  surveyQuestions,
  answerOptions,
  surveyAnswers,
  surveyForm,
  routing: routerReducer
});