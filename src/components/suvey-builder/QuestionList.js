import React from 'react';
import QuestionBuilder from './QuestionBuilder';
import PropTypes from 'prop-types';

import customPropTypes from './customPropTypes';

const QuestionList = ({questions}) => {
  if (questions.length === 0) {
    return null;
  }

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

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(customPropTypes.question).isRequired
};

export default QuestionList;