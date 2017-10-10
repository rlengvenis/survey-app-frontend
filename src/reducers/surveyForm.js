import * as actionTypes from '../constants/actionTypes';

const surveyForm = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_FORM_INIT_FORM_CONFIG: {
      const {questionIds, isValid} = action.payload;

      return {
        isValid,
        questionIds
      };
    }

    case actionTypes.SURVEY_FORM_CHANGE_QUESTION_ANSWER: {

    }

    default: {
      return state;
    }
  }
};

export default surveyForm;