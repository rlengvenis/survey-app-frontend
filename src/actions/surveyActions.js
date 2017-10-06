import {v4} from 'node-uuid';

import * as actionTypes from '../constants/actionTypes';

export const changeSurveyName = (surveyName) => ({
  type: actionTypes.SURVEY_CHANGE_NAME,
  payload: {surveyName}
});

export const changeSurveyDescription = (surveyDescription) => ({
  type: actionTypes.SURVEY_CHANGE_DESCRIPTION,
  payload: {surveyDescription}
});

export const saveSurvey = () => {

};