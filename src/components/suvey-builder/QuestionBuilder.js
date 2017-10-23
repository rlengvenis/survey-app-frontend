import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

import * as questionActions from '../../actions/questionActions';
import * as answerOptionActions from '../../actions/answerOptionActions';
import questionTypes from '../../constants/questionTypes';
import customPropTypes from '../../constants/customPropTypes';

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

  const handleQuestionTypeChange = ({type}) => {
    return questionActions.changeQuestionType({
      questionId: question._id,
      type
    });
  };

  const handleQuestionTitleChange = (e) => {
    return questionActions.changeQuestionTitle({
      questionId: question._id,
      title: e.target.value
    });
  };

  return (
    <div className="survey-builder__question">
      <input
        type="text"
        placeholder="Enter Question"
        value={question.title}
        onChange={handleQuestionTitleChange}
      />

      {
        question.type === questionTypes.MULTIPLE_ANSWER &&

        <AnswerOptionListBuilder
          questionId={question._id}
          answerOptions={question.answerOptions}
          onChangeAnswerOptionTitle={answerOptionActions.changeAnswerOptionTitle}
          onAddNewAnswerOption={answerOptionActions.addNewAnswerOption}
        />
      }

      <QuestionTypeSelector
        questionType={question.type}
        onSelectQuestionType={handleQuestionTypeChange}
      />

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
  question: customPropTypes.question.isRequired
};


export default connect(null, mapDispatchToProps)(QuestionBuilder);