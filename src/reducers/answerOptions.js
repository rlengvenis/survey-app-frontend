import * as actionTypes from '../constants/actionTypes';

const answerOptions = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ANSWER_OPTION_ADD_NEW: {
            const { id, title } = action.payload;
            return {
                ...state,
                [id]: {
                    id, title
                }
            };
        }
        case actionTypes.ANSWER_OPTION_CHANGE_TITLE: {
            const { id, title } = action.payload;
            return {
                ...state,
                [id]: {
                    id, title
                }
            }
        }
        default:
            return state;
    }
};

export default answerOptions;