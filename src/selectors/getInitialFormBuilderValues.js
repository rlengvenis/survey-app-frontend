const getInitialFormBuilderValues = (state) => {
  const surveyId = Object.keys(state.surveys)[0]; // Current implementation allows only one survey

  if (!surveyId) {
    return undefined;
  }

  const survey = state.surveys[surveyId];

  return {
    surveyName: survey.name,
    surveyDescription: survey.description,
    questions: Object.keys(state.questions).reduce((result, nextKey) => {
      result[nextKey] = state.questions[nextKey].title;
      return result;
    }, {}),
    answerOptions: Object.keys(state.answerOptions).reduce((result, nextKey) => {
      result[nextKey] = state.answerOptions[nextKey].title;
      return result;
    }, {})
  };


};


export default getInitialFormBuilderValues;

