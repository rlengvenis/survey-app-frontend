import React from 'react';
import {connect} from 'react-redux';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {required} from 'redux-form-validators'

import * as questionActions from '../../actions/questionActions';
import * as answerOptionActions from '../../actions/answerOptionActions';
import questionTypes from '../../constants/questionTypes';
import customPropTypes from '../../constants/customPropTypes';

import QuestionTypeSelector from './QuestionTypeSelector';
import AnswerOptionListBuilder from './AnswerOptionListBuilder';
import FormInput from "../shared/FormInput";


const QuestionBuilder = ({
  question,
  surveyId,
  questionActions,
  answerOptionActions
}) => {

  const handleQuestionTypeChange = ({type}) => {
    return questionActions.changeQuestionType({
      questionId: question._id,
      type
    });
  };

  const handleDeleteQuestion = () => {
    return questionActions.deleteQuestion({
      questionId: question._id,
      surveyId: surveyId
    })
  };

  return (
    <div className="survey-builder__question">
      <div className="survey-builder__question-control-group">
        <QuestionTypeSelector
          questionType={question.type}
          onSelectQuestionType={handleQuestionTypeChange}
        />
        <i
          className="material-icons survey-builder__remove-question-button"
          onClick={handleDeleteQuestion}
        >
          delete
        </i>
      </div>


      <Field
        type="text"
        placeholder="Enter Question"
        component={FormInput}
        name={`questions.${question._id}`}
        validate={[required()]}
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
    </div>
  );
};

QuestionBuilder.propTypes = {
  answerOptionActions: PropTypes.shape({
    addNewAnswerOption: PropTypes.func.isRequired
  }).isRequired,
  question: customPropTypes.question.isRequired,
  questionActions: PropTypes.shape({
    changeQuestionType: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  questionActions: bindActionCreators(questionActions, dispatch),
  answerOptionActions: bindActionCreators(answerOptionActions, dispatch)
});


export default connect(null, mapDispatchToProps)(QuestionBuilder);