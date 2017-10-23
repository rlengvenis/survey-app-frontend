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
      <div>
        {answerOptions.map(answerOption => (
          <label key={answerOption._id}>
            <input
              type="radio"
              {...input}
              value={answerOption.title}
              checked={answerOption.title === input.value}
            />
            {answerOption.title}
          </label>))
        }
        {touched && <span className="error">{error}</span>}
      </div>
    );
  }
}

AnswerOptionList.propTypes = {
  answerOptions: PropTypes.arrayOf(customPropTypes.answerOption).isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

export default AnswerOptionList;