import * as actionTypes from '../constants/actionTypes';

const questions = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.QUESTION_ADD_NEW: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }

        case actionTypes.QUESTION_CHANGE_TITLE: {
            const { id, title } = action.payload;

            return  {
                ...state,
                [id]: {
                    ...state[id],
                    title
                }
            };
        }

        case actionTypes.QUESTION_CHANGE_TYPE: {
            const { id, questionType } = action.payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    questionType,
                    title: ''
                }
            };
        }

        case actionTypes.ANSWER_OPTION_ADD_NEW: {
            const {id, questionId } = action.payload;
            const previousQuestion = state[questionId];

            return {
                ...state,
                [questionId]: {
                    ...previousQuestion,
                    answerOptionIds: [
                        ...previousQuestion.answerOptionIds,
                        id
                    ]
                }
            };
        }

        default:
            return state;
    }
};


export default questions;