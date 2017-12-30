import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../../constants/customPropTypes';

import QuestionResponseList from '../QuestionResponseList/QuestionResponseList'


const ResponsesPageQuestionList = ({questions}) => {
  return questions.map(question => {
    return (
      <QuestionResponseList
        key={question._id}
        question={question}
      />
    );
  })
};

ResponsesPageQuestionList.propTypes = {
  questions: PropTypes.arrayOf(customPropTypes.question).isRequired
};


export default ResponsesPageQuestionList;