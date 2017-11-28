import * as actionTypes from '../constants/actionTypes';
import update from 'immutability-helper';

import {bindFormDataToState} from '../utils/formDataUtils';

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_LOAD_SUCCESS: {
      const {questions} = action.payload.entities;

      return {
        ...questions
      };
    }

    case actionTypes.SURVEY_RESET: {
      return {}
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

    case actionTypes.SURVEY_BIND_FORM_DATA: {
      const {questions} = action.payload;

      return bindFormDataToState(questions, state);
    }

    default:
      return state;
  }
};

export default questionsReducer;