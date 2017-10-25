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
      <ul className="survey-builder__answer-options">
        {answerOptions.map((answerOption, index) => {
          return (
            <li key={answerOption._id}>
              <i className="material-icons">radio_button_unchecked</i>
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

      <div className="survey-builder__add-option">
        <i className="material-icons">radio_button_unchecked</i>
        <button className="button-flat"
                onClick={handleAddNewAnswerOption}>
          Add Other
        </button>
      </div>
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