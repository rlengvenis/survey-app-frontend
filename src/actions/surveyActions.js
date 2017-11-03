import {v4} from 'node-uuid';
import {normalize} from 'normalizr';


import getDenormalizedSurvey from '../selectors/getDenormalizedSurvey';
import survey from '../constants/schema';
import history from '../history';

import * as actionTypes from '../constants/actionTypes';


export const loadSurvey = () => (dispatch) => {
  _loadSurvey(dispatch, '/api/survey');
};

export const loadSurveyById = ({surveyId}) => (dispatch) => {
  _loadSurvey(dispatch, `/api/survey?id=${surveyId}`)
};

export const saveSurvey = ({surveyFormData}) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SURVEY_BIND_FORM_DATA,
    payload: surveyFormData
  });

  _saveSurvey(getDenormalizedSurvey(getState()))
};

export const resetSurvey = () => ({
  type: actionTypes.SURVEY_RESET
});

const _transformFormDataToState = (items, state) => {
  if (!items) {
    return {};
  }
  return Object.keys(items).reduce((result, nextKey) => {
    result[nextKey] = {...state[nextKey], title: items[nextKey]};
    return result;
  }, {});
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

  _saveSurvey(getDenormalizedSurvey(getState()))

};

const _saveSurvey = (survey) => {
  fetch('/api/survey', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify({
      survey
    })
  })
};

const _loadSurvey = async (dispatch, urlPath) => {
  const response = await fetch(urlPath, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  });

  if (response.ok) {
    const data = await response.json();

    if (data.survey) {
      dispatch({
        type: actionTypes.SURVEY_LOAD_SUCCESS,
        payload: normalize(data.survey, survey)
      });

    } else {
      dispatch({
        type: actionTypes.SURVEY_INIT_NEW,
        payload: {
          _id: v4(),
          name: '',
          description: '',
          questions: []
        }
      });
    }
  }
};