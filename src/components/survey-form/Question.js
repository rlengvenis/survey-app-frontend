import React from 'react';
import {Field} from 'redux-form';
import {required} from 'redux-form-validators'

import questionTypes from '../../constants/questionTypes';
import customPropTypes from '../../constants/customPropTypes';

import AnswerOptionList from './AnswerOptionList';
import FormInput from '../shared/FormInput';


const Question = ({question}) => {
  return (
    <div className="survey-form__question">
      <h2> {question.title} <abbr title="Required">*</abbr></h2>

      {
        question.type !== questionTypes.MULTIPLE_ANSWER &&

        <Field
          type="text"
          component={FormInput}
          name={question._id}
          placeholder="Your answer"
          validate={[required()]}
        />
      }

      {
        question.answerOptions.length > 0 &&

        <Field
          component={AnswerOptionList}
          name={question._id}
          answerOptions={question.answerOptions}
          validate={[required()]}
        />
      }

    </div>
  );
};

Question.propTypes = {
  question: customPropTypes.question.isRequired
};

export default Question;