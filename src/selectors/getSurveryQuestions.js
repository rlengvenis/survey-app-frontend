import getAnswerOptions from './getAnswerOptions';

const getSurveryQuestions = (state) =>
  state.surveyConfig.questionIds.map((id) => ({
    ...state.questions[id],
    answerOptions: getAnswerOptions(state, id)
  }));

export default getSurveryQuestions;