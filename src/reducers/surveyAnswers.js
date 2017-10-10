import * as actionTypes from '../constants/actionTypes';


const surveyAnswers = (state = {}, action) => {
  switch (action.type) {
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

export default surveyAnswers;