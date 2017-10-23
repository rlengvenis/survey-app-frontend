import {denormalize} from 'normalizr';

import survey from '../constants/schema';

const getDenormalizedSurvey = (state) => {
   return denormalize(state.survey, survey, {...state});
};

export default getDenormalizedSurvey;

