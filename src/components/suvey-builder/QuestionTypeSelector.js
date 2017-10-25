import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import questionTypes from '../../constants/questionTypes';


const QuestionTypeSelector = ({
  onSelectQuestionType,
  questionType
}) => {

  const shortAnswerButtonStyle = classnames({
    'button-flat button-flat--active': questionType === questionTypes.SHORT_ANSWER,
    'button-flat': questionType !== questionTypes.SHORT_ANSWER
  });

  const multipleAnswerButtonStyle = classnames({
    'button-flat button-flat--active': questionType === questionTypes.MULTIPLE_ANSWER,
    'button-flat': questionType !== questionTypes.MULTIPLE_ANSWER
  });

  return (
    <ul>
      <li>
        <button
          className={shortAnswerButtonStyle}
          onClick={() => onSelectQuestionType({
            type: questionTypes.SHORT_ANSWER
          })}
        >
          Short answer
        </button>
      </li>
      <li>
        <button
          className={multipleAnswerButtonStyle}
          onClick={() => onSelectQuestionType({
            type: questionTypes.MULTIPLE_ANSWER
          })}
        >
          Multiple answers
        </button>
      </li>
    </ul>
  )
};

QuestionTypeSelector.propTypes = {
  questionType: PropTypes.oneOf([
    questionTypes.SHORT_ANSWER,
    questionTypes.MULTIPLE_ANSWER
  ]).isRequired,
  onSelectQuestionType: PropTypes.func.isRequired
};

export default QuestionTypeSelector;
