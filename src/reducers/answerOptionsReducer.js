import * as actionTypes from '../constants/actionTypes';
import {transformFormDataToState} from '../utils/formDataUtils';


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

      return {
        ...state,
        [answerOptionId]: {
          _id: answerOptionId,
          title
        }
      };
    }

    case actionTypes.SURVEY_BIND_FORM_DATA: {
      const {answerOptions} = action.payload;

      const newAnswerOptions = transformFormDataToState(answerOptions, state);

      // return Object.keys(state).map(key => {
      //   if (answerOptions[key]) {
      //     return {
      //       ...state[key],
      //       title: answerOptions[key]
      //     }
      //   }
      //   return state[key];
      // });

      return {
        ...state,
        ...newAnswerOptions
      }
    }

    default:
      return state;
  }
};

export default answerOptionsReducer;