import React from 'react';

import surveyQuestionTypes from '../../../constants/questionTypes';
import customPropTypes from '../../../constants/customPropTypes';
import {CHART_TYPE_CONFIGURED} from '../../../config/appConfig';

import AnswerList from '../AnswerList/AnswerList';
import AnswerChartRenderer from '../AnswerChartRenderer/AnswerChartRenderer';


const QuestionResponses = ({question}) => {
  return (
    <div className="survey-responses__question">
      <h2>{question.title}</h2>

      {
        question.type === surveyQuestionTypes.MULTIPLE_ANSWER
          ? (
            <AnswerChartRenderer
              question={question}
              chartType={CHART_TYPE_CONFIGURED}
            />
          )
          : <AnswerList answers={question.answers}/>
      }

    </div>
  )
};

QuestionResponses.propTypes = {
  question: customPropTypes.question.isRequired
};

export default QuestionResponses;
