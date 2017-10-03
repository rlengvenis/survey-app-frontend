import {v4} from 'node-uuid';
import questionTypes from '../constants/questionTypes';
import * as actionTypes from '../constants/actionTypes';

// Survey actions

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

// Question Actions

export const addNewQuestion = () => {
  return {
    type: actionTypes.QUESTION_ADD_NEW,
    payload: {
      id: v4(), title: '',
      questionType: questionTypes.SHORT_ANSWER,
      answerOptionIds: []
    }
  };
};

export const changeQuestionTitle = ({id, title}) => ({
  type: actionTypes.QUESTION_CHANGE_TITLE,
  payload: {
    id,
    title
  }
});

export const changeQuestionType = ({questionType, id}) => ({
  type: actionTypes.QUESTION_CHANGE_TYPE,
  payload: {questionType, id}
});

// Answer Option Actions

export const addNewAnswerOption = ({questionId}) => ({
  type: actionTypes.ANSWER_OPTION_ADD_NEW,
  payload: {
    id: v4(),
    title: '',
    questionId
  }
});

export const changeAnswerOptionTitle = ({title, id}) => ({
  type: actionTypes.ANSWER_OPTION_CHANGE_TITLE,
  payload: {title, id}
});
