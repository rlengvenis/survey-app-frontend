import * as actionTypes from '../constants/actionTypes';
import update from 'immutability-helper';

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_UPDATE: {
      const {questions} = action.payload.entities;

      return {
        ...questions
      };
    }

    case actionTypes.QUESTION_ADD_NEW: {
      const {question, question: {_id}} = action.payload;

      return update(state, {
        $merge: {[_id]: question}
      });
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

      return update(state, {
        [questionId]: {
          answerOptions: {
            $push: [answerOptionId]
          }
        }
      });
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