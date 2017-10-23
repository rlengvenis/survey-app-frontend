import {v4} from 'node-uuid';

import questionTypes from '../constants/questionTypes';
import * as actionTypes from '../constants/actionTypes';
import {addNewAnswerOption} from './answerOptionActions';

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

export const changeQuestionType = ({type, questionId}) => (dispatch) => {
  dispatch({
    type: actionTypes.QUESTION_CHANGE_TYPE,
    payload: {type, questionId}
  });

  if (type === questionTypes.MULTIPLE_ANSWER) {
    dispatch(addNewAnswerOption({questionId}));
  }
};

