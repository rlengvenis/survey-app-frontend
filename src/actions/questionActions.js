import {v4} from 'node-uuid';

import questionTypes from '../constants/questionTypes';
import * as actionTypes from '../constants/actionTypes';

export const addNewQuestion = () => {
  return {
    type: actionTypes.QUESTION_ADD_NEW,
    payload: {
      _id: v4(),
      title: '',
      questionType: questionTypes.SHORT_ANSWER,
      answerOptions: []
    }
  };
};

export const changeQuestionTitle = ({questionId, title}) => ({
  type: actionTypes.QUESTION_CHANGE_TITLE,
  payload: {
    questionId,
    title
  }
});

export const changeQuestionType = ({questionType, questionId}) => ({
  type: actionTypes.QUESTION_CHANGE_TYPE,
  payload: {questionType, questionId}
});

