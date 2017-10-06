import React from 'react';
import AnswerOptionList from './AnswerOptionList';

const Question = ({question}) => {

  return (
    <div className="form-group">
      <h2> {question.title} <abbr title="Required">*</abbr></h2>

      <input
        className="form-control"
        type="text"
        name="movieName"
        id="movieName"
        placeholder="Your answer"
      />

      {
        question.answerOptions.length > 0 &&

        <AnswerOptionList answerOptions={question.answerOptions}/>
      }

    </div>
  );
};

export default Question;