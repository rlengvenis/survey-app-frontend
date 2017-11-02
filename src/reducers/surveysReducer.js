import * as actionTypes from '../constants/actionTypes';
import update from 'immutability-helper';


const surveysReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_UPDATE: {
      const {surveys} = action.payload.entities;
      return {
        ...surveys
      }
    }

    case actionTypes.SURVEY_INIT_NEW: {
      const {_id} = action.payload;

      return {[_id]: action.payload};
    }

    case actionTypes.QUESTION_ADD_NEW: {
      const {question: {_id}, surveyId} = action.payload;

      return update(state, {
        [surveyId]: {
          questions: {
            $push: [_id]
          }
        }
      });
    }

    case actionTypes.QUESTION_DELETE: {
      const {questionId, surveyId} = action.payload;
      const questionIndex = state[surveyId].questions.indexOf(questionId);

      return update(state, {
        [surveyId]: {
          questions: {
            $splice: [[questionIndex, 1]]
          }
        }
      });
    }

    case actionTypes.SURVEY_CLEAN_UP: {
      return {}
    }

    default:
      return state;
  }
};

export default surveysReducer;
