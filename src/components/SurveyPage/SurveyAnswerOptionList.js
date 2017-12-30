import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../constants/customPropTypes';

class SurveyAnswerOptionList extends React.Component {
  render() {
    const {
      input,
      meta,
      answerOptions
    } = this.props;

    return (
      <ul className="survey-form__radio-group-list">
        {
          answerOptions.map(answerOption => (

            <li
              key={answerOption._id}
              className="survey-form__radio-group-list-item"
            >
              <input
                id={answerOption._id}
                type="radio"
                {...input}
                value={answerOption.title}
                checked={answerOption.title === input.value}
              />

              <label
                htmlFor={answerOption._id}
                key={answerOption._id}
              >
                {answerOption.title}
              </label>
            </li>
          ))
        }
        {
          meta.touched && meta.error &&
          <span className="input--error-message">Error: {meta.error}</span>
        }
      </ul>
    );
  }
}

SurveyAnswerOptionList.propTypes = {
  answerOptions: PropTypes.arrayOf(customPropTypes.answerOption).isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

export default SurveyAnswerOptionList;