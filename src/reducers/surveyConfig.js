import * as actionTypes from '../constants/actionTypes';

const initialState = {
    surveyName: '',
    surveyDescription: '',
    questionIds: []
};

const surveyConfig = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SURVEY_CHANGE_DESCRIPTION: {
            return {
                ...state,
                surveyDescription: action.payload.surveyDescription
            };
        }

        case actionTypes.SURVEY_CHANGE_NAME: {
            return {
                ...state,
                surveyName: action.payload.surveyName
            };
        }

        case actionTypes.QUESTION_ADD_NEW: {
            return {
                ...state,
                questionIds: [
                    ...state.questionIds,
                    action.payload.id
                ]
            };
        }

        default:
            return state;
    }
};

export default surveyConfig;
