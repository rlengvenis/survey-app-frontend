import * as actionTypes from '../constants/actionTypes';


const answersReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SURVEY_LOAD_SUCCESS: {
      const {answers} = action.payload.entities;
      return {
        ...answers
      };
    }

    case actionTypes.SURVEY_SAVE_ANSWERS: {
      const {answers} = action.payload;

      const answersById = answers.reduce((result, answer) => {
        result[answer._id] = {
          answerText: answer.answerText,
          _id: answer._id
        };

        return result;
      }, {});

      return {
        ...answersById
      };
    }

    default: {
      return state;
    }
  }
};

export default answersReducer;