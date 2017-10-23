import React from 'react';
import {Field} from 'redux-form';

import questionTypes from '../../constants/questionTypes';
import customPropTypes from '../../constants/customPropTypes';

import AnswerOptionList from './AnswerOptionList';


const required = (value) => {
  return value ? undefined : 'Required';
};

const renderInput = (field) => {
  return (
    <div>
      <input type="text" {...field.input} />
      {field.meta.touched && <span>{field.meta.error}</span>}
    </div>
  )
};

const Question = ({question}) => {
  return (
    <div className="form-group">
      <h2> {question.title} <abbr title="Required">*</abbr></h2>

      {
        question.type !== questionTypes.MULTIPLE_ANSWER &&

        <Field
          className="form-control"
          type="text"
          component={renderInput}
          name={question._id}
          placeholder="Your answer"
          validate={[required]}
        />
      }

      {
        question.answerOptions.length > 0 &&

        <Field
          component={AnswerOptionList}
          name={question._id}
          answerOptions={question.answerOptions}
          validate={[required]}
        />
      }

    </div>
  );
};

Question.propTypes = {
  question: customPropTypes.question.isRequired
};

export default Question;