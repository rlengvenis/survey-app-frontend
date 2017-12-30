import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../constants/customPropTypes';

import Question from './Question';


const QuestionList = ({questions}) => {
  return (
    <div>
      {
        questions.map((question) => (
          <Question
            key={question._id}
            question={question}
          />
        ))
      }
    </div>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(customPropTypes.question).isRequired
};

export default QuestionList;