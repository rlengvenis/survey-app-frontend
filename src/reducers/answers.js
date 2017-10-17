import * as actionTypes from '../constants/actionTypes';


const answers = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_LOAD_SUCCESS: {
      const {answers} = action.payload.entities;
      return {
        ...answers
      };
    }
    case actionTypes.SURVEY_FORM_INIT_FORM_CONFIG: {
      const {answersById} = action.payload;

      return {
        ...answersById
      };
    }

    case actionTypes.SURVEY_FORM_CHANGE_QUESTION_ANSWER: {

    }

    default: {
      return state;
    }
  }
};

export default answers;