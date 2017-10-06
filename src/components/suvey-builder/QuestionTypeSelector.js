import React from 'react';
import PropTypes from 'prop-types';

import questionTypes from '../../constants/questionTypes';

const QuestionTypeSelector = ({
  onSelectQuestionType
}) => {

  return (
    <div>
      <ul>
        <li>
          <button
            onClick={() => onSelectQuestionType({
              questionType: questionTypes.SHORT_ANSWER
            })}
          >
            Short answer
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelectQuestionType({
              questionType: questionTypes.PARAGRAPH
            })}
          >
            Paragraph
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelectQuestionType({
              questionType: questionTypes.MULTIPLE_ANSWER
            })}
          >
            Multiple answers
          </button>
        </li>
      </ul>
    </div>
  )
};

QuestionTypeSelector.propTypes = {
  onSelectQuestionType: PropTypes.func.isRequired
};

export default QuestionTypeSelector;
