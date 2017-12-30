import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../constants/customPropTypes';

import SurveyQuestion from './SurveyQuestion';


const SurveyQuestionList = ({questions}) => {
  return (
    <div>
      {
        questions.map((question) => (
          <SurveyQuestion
            key={question._id}
            question={question}
          />
        ))
      }
    </div>
  );
};

SurveyQuestionList.propTypes = {
  questions: PropTypes.arrayOf(customPropTypes.question).isRequired
};

export default SurveyQuestionList;