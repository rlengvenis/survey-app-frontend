import {v4} from 'node-uuid';
import {normalize} from 'normalizr';

import survey from './schema';


import * as actionTypes from '../constants/actionTypes';

export const changeSurveyName = (name) => ({
  type: actionTypes.SURVEY_CHANGE_NAME,
  payload: {name}
});

export const changeSurveyDescription = (description) => ({
  type: actionTypes.SURVEY_CHANGE_DESCRIPTION,
  payload: {description}
});

export const loadSurvey = () => (dispatch) => {
  fetch('/api/survey')
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: actionTypes.SURVEY_LOAD_SUCCESS,
        payload: normalize(result.survey, survey)
      });
    })
};

export const saveSurvey = (survey) => (dispatch) => {
  fetch('/api/survey', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      survey
    })
  })
};