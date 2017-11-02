export const transformFormDataToState = (items, state) => {
  if (!items) {
    return {};
  }
  return Object.keys(items).reduce((result, nextKey) => {
    result[nextKey] = {...state[nextKey], title: items[nextKey]};
    return result;
  }, {});
};
