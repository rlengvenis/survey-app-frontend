import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {required} from 'redux-form-validators'

import customPropTypes from '../../../constants/customPropTypes';

import FormInput from '../../shared/FormInput';


const AnswerOptionListBuilder = ({
  questionId,
  answerOptions,
  onAddNewAnswerOption
}) => {

  const handleAddNewAnswerOption = () => {
    return onAddNewAnswerOption({questionId});
  };

  return (
    <div>
      <ul className="survey-builder__answer-options">
        {answerOptions.map((answerOption, index) => {
          return (
            <li key={answerOption._id}>
              <i className="survey-builder__radio-button-icon material-icons">radio_button_unchecked</i>
              <div className="survey-builder__answer-option">
                <Field
                  className="input"
                  type="text"
                  placeholder="Answer option"
                  component={FormInput}
                  name={`answerOptions.${answerOption._id}`}
                  validate={[required()]}
                />
              </div>
            </li>);
        })}
      </ul>

      <div className="survey-builder__add-option">
        <i className="survey-builder__radio-button-icon material-icons">radio_button_unchecked</i>
        <button
          className="button-flat"
          type="button"
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
  questionId: PropTypes.string.isRequired
};

export default AnswerOptionListBuilder;