/***
 * Bind reduxForm fields to appropriate reducer.
 * Ex: form answerOptions to answerOptionsReducer
 *
 * @param formFields form fields by pattern {id: title, id2: title}
 * @param state existing reducer state
 * @returns {*} new state instance
 */

export const bindFormDataToState = ({formFields, state}) => {
  return Object.keys(state).reduce((result, nextKey) => {
    if (formFields[nextKey]) {
      result[nextKey] = {
        ...state[nextKey],
        title: formFields[nextKey]
      }
    } else {
      result[nextKey] = state[nextKey];
    }

    return result;
  }, {});
};
