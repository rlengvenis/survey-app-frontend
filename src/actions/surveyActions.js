import {v4} from 'node-uuid';
import {normalize} from 'normalizr';

import getDenormalizedSurvey from '../selectors/getDenormalizedSurvey';
import survey from '../constants/schema';


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
  return fetch('/api/survey')
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: actionTypes.SURVEY_LOAD_SUCCESS,
        payload: normalize(result.survey, survey)
      });
    })
};

export const saveSurvey = (survey) => (dispatch) => {
  _updateSurvey(survey);
};

export const saveSurveyAnswers = ({surveyFormData}) => (dispatch, getState) => {
  const answers = Object.keys(surveyFormData).map((key) => {
    return {
      _id: v4(),
      answerText: surveyFormData[key],
      questionId: key
    };
  });

  dispatch({
    type: actionTypes.SURVEY_SAVE_ANSWERS,
    payload: {answers}
  });

  _updateSurvey(getDenormalizedSurvey(getState()))
};

function _updateSurvey(survey) {
  fetch('/api/survey', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      survey
    })
  })
}