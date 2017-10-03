const getAnswerOptions = (state, questionId) =>
    state.questions[questionId].answerOptionIds.map((id) =>
        state.answerOptions[id]
    );

export default getAnswerOptions;