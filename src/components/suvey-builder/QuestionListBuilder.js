import React from 'react';
import QuestionBuilder from './QuestionBuilder';
import PropTypes from 'prop-types';

import customPropTypes from './customPropTypes';

const QuestionListBuilder = ({questions}) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionBuilder
          key={question.id}
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