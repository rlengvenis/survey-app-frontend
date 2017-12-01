import {v4} from 'node-uuid';
import {normalize} from 'normalizr';

import history from '../history';
import {API_URL} from '../config/appConfig';

import getDenormalizedSurvey from '../selectors/getDenormalizedSurvey';
import survey from '../models/schema';

import * as actionTypes from '../constants/actionTypes';


export const loadSurvey = () => (dispatch) => {
  _loadSurvey(dispatch, '/api/survey');
};

export const loadSurveyById = ({surveyId}) => (dispatch) => {
  _loadSurvey(dispatch, `/api/surveyById/${surveyId}`)
};

export const saveSurvey = ({surveyFormData}) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.SURVEY_BIND_FORM_DATA,
    payload: surveyFormData
  });

  const state = getState();
  const surveyId = Object.keys(state.surveys)[0]; // Current implementation allows only one survey

  await _saveSurvey(getDenormalizedSurvey(state));

  history.push({
    pathname: '/survey',
    search: surveyId && `id=${surveyId}`
  })
};

export const resetSurvey = () => ({
  type: actionTypes.SURVEY_RESET
});

export const saveSurveyAnswers = ({surveyId, surveyFormData}) => async (dispatch) => {
  const answers = Object.keys(surveyFormData).map((key) => {
    return {
      _id: v4(),
      answerText: surveyFormData[key],
      questionId: key
    };
  });

  await fetch(`${API_URL}/api/answers`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      surveyId,
      answers
    })
  });
};

const _saveSurvey = (survey) => {
  return fetch(`${API_URL}/api/survey`, {
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
  const response = await fetch(API_URL + urlPath, {
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