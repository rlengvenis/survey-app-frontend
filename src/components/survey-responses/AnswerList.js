import React from 'react';

const AnswerList = ({answers}) => {
  return (
    <ul className="survey-responses__answer-list">
      {
        answers.map(answer => {
          return (
            <li
              className="survey-responses__answer-list-item"
              key={answer._id}
            >
              {answer.answerText}
            </li>
          )
        })
      }
    </ul>
  )
};

export default AnswerList;
