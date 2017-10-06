import React from 'react';
import PropTypes from 'prop-types';
import customPropTypes from './customPropTypes';

const AnswerOptionBuilder = ({
  questionId,
  answerOptions,
  onChangeAnswerOptionTitle,
  onAddNewAnswerOption
}) => {

  const handleAddNewAnswerOption = () =>
    onAddNewAnswerOption({questionId});

  return (
    <div>
      <ul>
        {answerOptions.map((answerOption) => {
          return (
            <li key={answerOption.id}>
              <input
                type="text"
                placeholder="Add answer option"
                value={answerOption.title}
                onChange={(e) => onChangeAnswerOptionTitle({
                  title: e.target.value,
                  answerOptionId: answerOption.id
                })}
              />
            </li>);
        })}
      </ul>

      <button onClick={handleAddNewAnswerOption}>
        Add Option
      </button>
    </div>
  );
};

AnswerOptionBuilder.propTypes = {
  questionId: PropTypes.string.isRequired,
  answerOptions: PropTypes.arrayOf(customPropTypes.answerOption).isRequired,
  onChangeAnswerOptionTitle: PropTypes.func.isRequired,
  onAddNewAnswerOption: PropTypes.func.isRequired
};

export default AnswerOptionBuilder;