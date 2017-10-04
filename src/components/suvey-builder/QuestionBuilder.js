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

  const handleQuestionTypeChange = ({questionType}) =>
    changeQuestionType({id: question.id, questionType});

  const handleQuestionTitleChange = ({title}) =>
    changeQuestionTitle({id: question.id, title});

  const handleAnswerOptionTitleChange = ({id, title}) =>
    changeAnswerOptionTitle({id, title});      //TODO pervadink į answerOptionId

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