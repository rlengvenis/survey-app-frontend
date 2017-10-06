import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions/';
import questionTypes from '../../constants/questionTypes';

import QuestionInput from './QuestionInput';
import QuestionTypeSelector from './QuestionTypeSelector';
import AnswerOptions from './AnswerOptions';

const QuestionBuilder = ({
  question,
  changeQuestionTitle,
  addNewAnswerOption,
  changeAnswerOptionTitle,
  changeQuestionType
}) => {

  console.log('Render QuestionBuilder')
  const handleQuestionTypeChange = ({questionType}) =>
    changeQuestionType({questionId: question.id, questionType});

  const handleQuestionTitleChange = ({title}) =>
    changeQuestionTitle({questionId: question.id, title});

  const handleAnswerOptionTitleChange = ({answerOptionId, title}) =>
    changeAnswerOptionTitle({answerOptionId, title});

  const handleAddNewAnswerOption = ({questionId}) =>
    addNewAnswerOption({questionId});

  return (
    <div>
      <QuestionTypeSelector
        onSelectQuestionType={handleQuestionTypeChange}
      />
      <QuestionInput
        questionTitle={question.title}
        onChangeQuestionTitle={handleQuestionTitleChange}
      />
      {question.questionType === questionTypes.MULTIPLE_ANSWER &&

        <AnswerOptions
          questionId={question.id}
          answerOptions={question.answerOptions}
          onChangeAnswerOptionTitle={handleAnswerOptionTitleChange}
          onAddNewAnswerOption={handleAddNewAnswerOption}
        />
      }
    </div>
  );
};

export default connect(null, actions)(QuestionBuilder);