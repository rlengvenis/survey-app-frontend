import {v4} from 'node-uuid';

import * as actionTypes from '../constants/actionTypes';

export const addNewAnswerOption = ({questionId}) => ({
  type: actionTypes.ANSWER_OPTION_ADD_NEW,
  payload: {
    answerOptionId: v4(),
    title: '',
    questionId
  }
});

