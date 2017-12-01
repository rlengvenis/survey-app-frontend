import * as actionTypes from '../constants/actionTypes';
import {bindFormDataToState} from '../utils/formDataUtils';
import update from 'immutability-helper';


const answerOptionsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_LOAD_SUCCESS: {
      const {answerOptions} = action.payload.entities;

      return {
        ...answerOptions
      };
    }

    case actionTypes.ANSWER_OPTION_ADD_NEW:
    case actionTypes.ANSWER_OPTION_CHANGE_TITLE: {
      const {answerOptionId, title} = action.payload;

      return update(state, {
        $merge: {
          [answerOptionId]: {
            _id: answerOptionId,
            title
          }
        }
      })
    }

    case actionTypes.SURVEY_BIND_FORM_DATA: {
      const {answerOptions} = action.payload;

      return bindFormDataToState(answerOptions, state);
    }

    case actionTypes.SURVEY_RESET: {
      return {}
    }

    default:
      return state;
  }
};

export default answerOptionsReducer;