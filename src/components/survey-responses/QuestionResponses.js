import React from 'react';

import surveyQuestionTypes from '../../constants/questionTypes';
import customPropTypes from '../../constants/customPropTypes';

import AnswerList from './AnswerList';
import AnswerChartRenderer from './AnswerChartRenderer';


const QuestionResponses = ({question}) => {
  return (
    <div className="survey-responses__question">
      <h2>{question.title}</h2>

      {
        question.type === surveyQuestionTypes.MULTIPLE_ANSWER
          ? <AnswerChartRenderer question={question}/>
          : <AnswerList answers={question.answers}/>
      }
    </div>
  )
};

QuestionResponses.propTypes = {
  question: customPropTypes.question.isRequired
};

export default QuestionResponses;
