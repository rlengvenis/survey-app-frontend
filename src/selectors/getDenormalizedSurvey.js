import {denormalize} from 'normalizr';

import survey from '../actions/schema';

const getDenormalizedSurvey = (state) => {
   return denormalize(state.survey, survey, {...state});
};

export default getDenormalizedSurvey;

