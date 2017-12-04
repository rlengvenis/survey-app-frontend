import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../constants/customPropTypes';

import QuestionResponses from './QuestionResponses'


const QuestionList = ({questions}) => {
  return questions.map(question => {
    return (
      <QuestionResponses
        key={question._id}
        question={question}
      />
    );
  })
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(customPropTypes.question).isRequired
};


export default QuestionList;