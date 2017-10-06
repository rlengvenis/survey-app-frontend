const getAnswerOptions = (state, questionId) =>
  state.surveyQuestions[questionId].answerOptionIds.map((id) =>
    state.answerOptions[id]
  );

export default getAnswerOptions;