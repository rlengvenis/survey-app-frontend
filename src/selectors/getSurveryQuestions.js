import getAnswerOptions from './getAnswerOptions';

const getSurveyQuestions = (state) =>
  state.survey.questionIds.map((id) => ({
    ...state.surveyQuestions[id],
    answerOptions: getAnswerOptions(state, id),
    answer: state.surveyAnswers[id]
  }));

export default getSurveyQuestions;
