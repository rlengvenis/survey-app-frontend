import {v4} from 'node-uuid';
import * as actionTypes from '../constants/actionTypes';


const initSurveyFormConfig = ({questionIds}) => ({
  type: actionTypes.SURVEY_FORM_INIT_FORM_CONFIG,
  payload: {
    isValid: false,
    answersById: questionIds.reduce((questionAnswers = {}, questionId) => {
      const answerId = v4();
      questionAnswers[questionIds] = {
        _id: answerId,
        questionId,
        answerText: null
      };

      return questionAnswers;
    })
  }
});

const changeQuestionAnswer = ({questionId, answerText}) => ({
  type: actionTypes.SURVEY_FORM_CHANGE_QUESTION_ANSWER,
  payload: {
    _id: v4(),
    questionId,
    answerText
  }
});
