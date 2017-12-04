/***
 * Define label names of a chart
 *
 * @param answerOptions
 * @returns {Array} a list of answer option titles
 */
export const populateLabelValues = ({answerOptions}) => {
  return Object
    .values(answerOptions)
    .map(answerOption => answerOption.title);
};

/***
 * Populate how many instances of each answer option title exists in answers provided
 *
 * @param question object containing answerOptions and answers
 * @returns {Array} a list of how much each answer option occurred in the answers
 */
export const populateChartData = ({question}) => {
  return Object.values(question.answerOptions).map(answerOption => {
    const title = answerOption.title;

    // Get how many instances of a given title exist
    return Object
      .values(question.answers)
      .filter(answer => answer.answerText === title)
      .length
  });
};
