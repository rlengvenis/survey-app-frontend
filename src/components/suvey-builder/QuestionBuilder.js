import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/';
import questionTypes from '../../constants/questionTypes';
import customPropTypes from './customPropTypes';

import QuestionTypeSelector from './QuestionTypeSelector';
import AnswerOptionList from './AnswerOptionBuilder';


const QuestionBuilder = ({
  question,
  changeQuestionTitle,
  addNewAnswerOption,
  changeAnswerOptionTitle,
  changeQuestionType
}) => {

  const handleQuestionTypeChange = ({questionType}) => {
    return changeQuestionType({
      questionId: question.id,
      questionType
    });
  };

  const handleQuestionTitleChange = (e) => {
    return changeQuestionTitle({
      questionId: question.id,
      title: e.target.value
    });
  };

  return (
    <div>
      <QuestionTypeSelector
        onSelectQuestionType={handleQuestionTypeChange}
      />

      <input
        type="text"
        placeholder="Enter Question"
        value={question.title}
        onChange={handleQuestionTitleChange}
      />

      {
        question.questionType === questionTypes.MULTIPLE_ANSWER &&

        <AnswerOptionList
          questionId={question.id}
          answerOptions={question.answerOptions}
          onChangeAnswerOptionTitle={changeAnswerOptionTitle}
          onAddNewAnswerOption={addNewAnswerOption}
        />
      }
    </div>
  );
};

QuestionBuilder.propTypes = {
  question: customPropTypes.question.isRequired,
  changeQuestionTitle: PropTypes.func.isRequired,
  addNewAnswerOption: PropTypes.func.isRequired,
  changeAnswerOptionTitle: PropTypes.func.isRequired,
  changeQuestionType: PropTypes.func.isRequired
};


export default connect(null, actions)(QuestionBuilder);