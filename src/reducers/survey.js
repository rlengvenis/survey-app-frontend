import * as actionTypes from '../constants/actionTypes';

const initialState = {
  surveyName: '',
  surveyDescription: '',
  questionIds: []
};

const survey = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_CHANGE_DESCRIPTION: {
      const {surveyDescription} = action.payload;
      return {
        ...state,
        surveyDescription
      };
    }

    case actionTypes.SURVEY_CHANGE_NAME: {
      const {surveyName} = action.payload;
      return {
        ...state,
        surveyName
      };
    }

    case actionTypes.QUESTION_ADD_NEW: {
      const {id} = action.payload;
      return {
        ...state,
        questionIds: [
          ...state.questionIds,
          id
        ]
      };
    }

    default:
      return state;
  }
};

export default survey;
