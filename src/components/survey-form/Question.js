import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import questionTypes from '../../constants/questionTypes';
import * as answerActions from '../../actions/surveyFormActions';

import AnswerOptionList from './AnswerOptionList';


const mapDispatchToProps = (dispatch) => ({
  answerActions: bindActionCreators(answerActions, dispatch)
});

const Question = ({question, answerActions}) => {

  console.log('question', question);

  const handleChangeQuestionAnswer = (e) => {
    answerActions.changeQuestionAnswer({
      questionId: question.id,
      answer: e.target.value
    });
  };

  return (
    <div className="form-group">
      <h2> {question.title} <abbr title="Required">*</abbr></h2>

      {
        question.questionType !== questionTypes.MULTIPLE_ANSWER &&

        <input
          className="form-control"
          type="text"
          name={question.id}
          value={question.answer.answerText}
          onChange={handleChangeQuestionAnswer}
          placeholder="Your answer"
        />
      }

      {
        question.answerOptions.length > 0 &&

        <AnswerOptionList
          answerOptions={question.answerOptions}
          onChangeAnswerOption={handleChangeQuestionAnswer}
        />
      }

    </div>
  );
};

export default connect(null, mapDispatchToProps)(Question);