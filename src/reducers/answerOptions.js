import * as actionTypes from '../constants/actionTypes';

const answerOptions = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ANSWER_OPTION_ADD_NEW:
    case actionTypes.ANSWER_OPTION_CHANGE_TITLE: {
      const {answerOptionId, title} = action.payload;
      return {
        ...state,
        [answerOptionId]: {
          id: answerOptionId, title
        }
      };
    }
    default:
      return state;
  }
};

export default answerOptions;