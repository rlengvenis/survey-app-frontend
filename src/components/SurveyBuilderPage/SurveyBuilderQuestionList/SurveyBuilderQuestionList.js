import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../../constants/customPropTypes';

import QuestionBuilder from '../QuestionBuilder/QuestionBuilder';


const SurveyBuilderQuestionList = ({questions, surveyId}) => {
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

SurveyBuilderQuestionList.propTypes = {
  questions: PropTypes.arrayOf(customPropTypes.question).isRequired,
  surveyId: PropTypes.string.isRequired
};

export default SurveyBuilderQuestionList;