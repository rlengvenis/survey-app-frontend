import React from 'react';

import questionTypes from '../../constants/questionTypes';

import AnswerOptionList from './AnswerOptionList';


const Question = ({question}) => {

  return (
    <div className="form-group">
      <h2> {question.title} <abbr title="Required">*</abbr></h2>

      {
        question.questionType !== questionTypes.MULTIPLE_ANSWER &&

        <input
          className="form-control"
          type="text"
          name={question.id}
          value=''
          placeholder="Your answer"
        />
      }

      {
        question.answerOptions.length > 0 &&

        <AnswerOptionList answerOptions={question.answerOptions}/>
      }

    </div>
  );
};

export default Question;