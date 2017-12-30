import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../constants/customPropTypes';

import QuestionBuilder from './QuestionBuilder';


const QuestionListBuilder = ({questions, surveyId}) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionBuilder
          key={question._id}
          surveyId={surveyId}
          question={question}
        />
      ))}
    </div>
  );
};

QuestionListBuilder.propTypes = {
  questions: PropTypes.arrayOf(customPropTypes.question).isRequired,
  surveyId: PropTypes.string.isRequired
};

export default QuestionListBuilder;