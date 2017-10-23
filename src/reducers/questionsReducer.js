import * as actionTypes from '../constants/actionTypes';

const questionsReducer = (state = {}, action) => {
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
      const {questionId, type} = action.payload;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          answerOptions: [],
          type
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

    case actionTypes.SURVEY_SAVE_ANSWERS: {
      const {answers} = action.payload;

      const updatedQuestionsById = answers.reduce((result, answer) => {
        result[answer.questionId] = {
          ...state[answer.questionId],
          answers: [answer._id]
        };

        return result;
      }, {});

      return {
        ...state,
        ...updatedQuestionsById
      }
    }

    default:
      return state;
  }
};

export default questionsReducer;