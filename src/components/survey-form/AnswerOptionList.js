import React from 'react';
import PropTypes from 'prop-types';

import customPropTypes from '../../constants/customPropTypes';

class AnswerOptionList extends React.Component {
  render() {
    const {
      input,
      meta: {touched, error},
      answerOptions
    } = this.props;

    return (
      <ul className="survey-form__radio-group-list">
        {answerOptions.map(answerOption => (

          <li className="survey-form__radio-group-list-item">
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
        {touched && <span className="error">{error}</span>}
      </ul>
    );
  }
}

AnswerOptionList.propTypes = {
  answerOptions: PropTypes.arrayOf(customPropTypes.answerOption).isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

export default AnswerOptionList;