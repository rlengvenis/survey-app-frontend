import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import surveyConfig from './surveyConfig';
import surveyQuestions from './surveyQuestions';
import answerOptions from './answerOptions';
import surveyAnswers from './surveyAnswers';

export default combineReducers({
  surveyConfig,
  surveyQuestions,
  answerOptions,
  surveyAnswers,
  routing: routerReducer
});