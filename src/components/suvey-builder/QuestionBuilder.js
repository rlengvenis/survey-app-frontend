import React from 'react';
import {connect} from 'react-redux';

import questionTypes from '../../constants/questionTypes';
import * as actions from '../../actions/index';

import SimpleQuestion from './SimpleQuestion';
import MultipleAnswerQuestion from './MultipleAnswerQuestion';

class QuestionBuilder extends React.Component {
  render() {
    return (
      <div>
        {this.renderQuestionTypeControls()}
        {this.renderQuestion()}
      </div>
    );
  }

  renderQuestionTypeControls() {
    const {
      question,
      changeQuestionType
    } = this.props;

    return (
      <div>
        <ul>
          <li>
            <button
              onClick={() => changeQuestionType({
                questionType: questionTypes.SHORT_ANSWER,
                id: question.id
              })}
            >
              Short answer
            </button>
          </li>
          <li>
            <button
              onClick={() => changeQuestionType({
                questionType: questionTypes.PARAGRAPH,
                id: question.id
              })}
            >
              Paragraph
            </button>
          </li>
          <li>
            <button
              onClick={() => changeQuestionType({
                questionType: questionTypes.MULTIPLE_ANSWER,
                id: question.id
              })}
            >
              Multiple answers
            </button>
          </li>
        </ul>
      </div>
    )
  }

  renderQuestion() {
    const {
      question,
      changeQuestionTitle,
      addNewAnswerOption,
      changeAnswerOptionTitle
    } = this.props;

    switch (question.questionType) {
      case questionTypes.SHORT_ANSWER:
      case questionTypes.PARAGRAPH:

        return (
          <SimpleQuestion
            question={question}
            onChangeQuestionTitle={({id, title}) =>
              changeQuestionTitle({id, title})
            }
          />
        );
      case questionTypes.MULTIPLE_ANSWER:

        return (
          <MultipleAnswerQuestion
            question={question}
            onChangeQuestionTitle={({title, id}) =>
              changeQuestionTitle({id, title})
            }
            onAddNewAnswerOption={({questionId}) =>
              addNewAnswerOption({questionId})
            }
            onChangeAnswerOptionTitle={({id, title}) =>
              changeAnswerOptionTitle({id, title})
            }
          />
        );
    }
  }
}

QuestionBuilder = connect(null, actions)(QuestionBuilder);

export default QuestionBuilder;