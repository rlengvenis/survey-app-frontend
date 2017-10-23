import React from 'react';
import PropTypes from 'prop-types';
import customPropTypes from '../../constants/customPropTypes';

const AnswerOptionListBuilder = ({
  questionId,
  answerOptions,
  onChangeAnswerOptionTitle,
  onAddNewAnswerOption
}) => {

  const handleAddNewAnswerOption = () => {
    return onAddNewAnswerOption({questionId});
  }

  return (
    <div>
      <ul>
        {answerOptions.map((answerOption) => {
          return (
            <li key={answerOption._id}>
              <input
                type="text"
                placeholder="Add answer option"
                value={answerOption.title}
                onChange={(e) => onChangeAnswerOptionTitle({
                  title: e.target.value,
                  answerOptionId: answerOption._id
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

AnswerOptionListBuilder.propTypes = {
  answerOptions: PropTypes.arrayOf(customPropTypes.answerOption).isRequired,
  onAddNewAnswerOption: PropTypes.func.isRequired,
  onChangeAnswerOptionTitle: PropTypes.func.isRequired,
  questionId: PropTypes.string.isRequired
};

export default AnswerOptionListBuilder;