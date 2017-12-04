import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../constants/customPropTypes';


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

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(customPropTypes.answers).isRequired
};

export default AnswerList;
