import {v4} from 'uuid';

import questionTypes from '../constants/questionTypes';
import * as actionTypes from '../constants/actionTypes';
import {addNewAnswerOption} from './answerOptionActions';

export const addNewQuestion = ({surveyId}) => {
  return {
    type: actionTypes.QUESTION_ADD_NEW,
    payload: {
      surveyId,
      question: {
        _id: v4(),
        title: '',
        type: questionTypes.SHORT_ANSWER,
        answerOptions: []
      }
    }
  };
};

export const changeQuestionType = ({type, questionId}) => (dispatch) => {
  dispatch({
    type: actionTypes.QUESTION_CHANGE_TYPE,
    payload: {type, questionId}
  });

  if (type === questionTypes.MULTIPLE_ANSWER) {
    dispatch(addNewAnswerOption({questionId}));
  }
};

export const deleteQuestion = ({questionId, surveyId}) => ({
  type: actionTypes.QUESTION_DELETE,
  payload: {
    questionId,
    surveyId
  }
});

