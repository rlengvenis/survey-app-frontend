import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import surveyConfig from './surveyConfig';
import questions from './questions';
import answerOptions from './answerOptions';

export default combineReducers({
    surveyConfig,
    questions,
    answerOptions,
    routing: routerReducer
});