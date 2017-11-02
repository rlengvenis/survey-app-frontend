import {v4} from 'node-uuid';
import {normalize} from 'normalizr';

import getDenormalizedSurvey from '../selectors/getDenormalizedSurvey';
import survey from '../constants/schema';

import * as actionTypes from '../constants/actionTypes';


export const loadSurvey = () => async (dispatch) => {
  const response = await fetch('/api/survey', {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  });

  if (response.ok) {
    const data = await response.json();

    if (data.survey) {
      dispatch({
        type: actionTypes.SURVEY_UPDATE,
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

export const saveSurvey = ({surveyFormData}) => (dispatch, getState) => {
    const state = getState();
    const surveyId = Object.keys(state.surveys)[0];

    const modifiedNormalizedSurvey = {
      entities: {
        surveys: {
          ...state.surveys,
          [surveyId]: {
            ...state.surveys[surveyId],
            name: surveyFormData.surveyName,
            description: surveyFormData.surveyDescription
          }
        },
        questions: _transformFormDataToState(surveyFormData.questions, state.questions),
        answerOptions: _transformFormDataToState(surveyFormData.answerOptions, state.answerOptions)
      }
    };

    dispatch({
      type: actionTypes.SURVEY_UPDATE,
      payload: modifiedNormalizedSurvey
    });

  _saveSurvey(getDenormalizedSurvey(getState()))
  };

export const clearSurvey = () => ({
  type: actionTypes.SURVEY_CLEAN_UP
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