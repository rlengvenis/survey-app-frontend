import * as actionTypes from '../constants/actionTypes';

const initialState = {
  name: '',
  description: '',
  questions: []
};

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_LOAD_SUCCESS: {
      const {entities: {survey}, result} = action.payload;
      return {
        ...survey[result]
      }
    }

    case actionTypes.SURVEY_CHANGE_DESCRIPTION: {
      const {description} = action.payload;
      return {
        ...state,
        description
      };
    }

    case actionTypes.SURVEY_CHANGE_NAME: {
      const {name} = action.payload;
      return {
        ...state,
        name
      };
    }

    case actionTypes.QUESTION_ADD_NEW: {
      const {_id} = action.payload;
      return {
        ...state,
        questions: [
          ...state.questions,
          _id
        ]
      };
    }

    default:
      return state;
  }
};

export default surveyReducer;
