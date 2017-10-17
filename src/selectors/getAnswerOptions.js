const getAnswerOptions = (state, questionId) => {
  return state.questions[questionId].answerOptions.map((answerOptionId) =>
    state.answerOptions[answerOptionId]
  );
};


export default getAnswerOptions;