import * as actionTypes from '../constants/actionTypes';

const questions = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_LOAD_SUCCESS: {
      const {questions} = action.payload.entities;

      return {
        ...questions
      };
    }
    case actionTypes.QUESTION_ADD_NEW: {
      const {_id} = action.payload;
      return {
        ...state,
        [_id]: action.payload
      };
    }

    case actionTypes.QUESTION_CHANGE_TITLE: {
      const {questionId, title} = action.payload;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          title
        }
      };
    }

    case actionTypes.QUESTION_CHANGE_TYPE: {
      const {questionId, questionType} = action.payload;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          questionType
        }
      };
    }

    case actionTypes.ANSWER_OPTION_ADD_NEW: {
      const {answerOptionId, questionId} = action.payload;
      const previousQuestion = state[questionId];

      return {
        ...state,
        [questionId]: {
          ...previousQuestion,
          answerOptions: [
            ...previousQuestion.answerOptions,
            answerOptionId
          ]
        }
      };
    }

    default:
      return state;
  }
};

export default questions;