import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

import * as questionActions from '../../actions/questionActions';
import * as answerOptionActions from '../../actions/answerOptionActions';
import questionTypes from '../../constants/questionTypes';
import customPropTypes from './customPropTypes';

import QuestionTypeSelector from './QuestionTypeSelector';
import AnswerOptionListBuilder from './AnswerOptionListBuilder';


const mapDispatchToProps = (dispatch) => ({
  questionActions: bindActionCreators(questionActions, dispatch),
  answerOptionActions: bindActionCreators(answerOptionActions, dispatch)
});

const QuestionBuilder = ({
  question,
  questionActions,
  answerOptionActions
}) => {

  const handleQuestionTypeChange = ({questionType}) => {
    return questionActions.changeQuestionType({
      questionId: question.id,
      questionType
    });
  };

  const handleQuestionTitleChange = (e) => {
    return questionActions.changeQuestionTitle({
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

        <AnswerOptionListBuilder
          questionId={question.id}
          answerOptions={question.answerOptions}
          onChangeAnswerOptionTitle={answerOptionActions.changeAnswerOptionTitle}
          onAddNewAnswerOption={answerOptionActions.addNewAnswerOption}
        />
      }
    </div>
  );
};

QuestionBuilder.propTypes = {
  questionActions: PropTypes.shape({
    changeQuestionTitle: PropTypes.func.isRequired,
    changeQuestionType: PropTypes.func.isRequired
  }).isRequired,
  answerOptionActions: PropTypes.shape({
    addNewAnswerOption: PropTypes.func.isRequired,
    changeAnswerOptionTitle: PropTypes.func.isRequired,
  }).isRequired,
  question: customPropTypes.question.isRequired,
};


export default connect(null, mapDispatchToProps)(QuestionBuilder);