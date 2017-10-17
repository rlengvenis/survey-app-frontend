import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from './customPropTypes';

import QuestionBuilder from './QuestionBuilder';


const QuestionListBuilder = ({questions}) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionBuilder
          key={question._id}
          question={question}
        />
      ))}
    </div>
  );
};

QuestionListBuilder.propTypes = {
  questions: PropTypes.arrayOf(customPropTypes.question).isRequired
};

export default QuestionListBuilder;