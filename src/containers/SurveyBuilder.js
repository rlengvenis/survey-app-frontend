import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import getSurveyQuestions from '../selectors/getSurveryQuestions';

import SimpleQuestion from '../components/SimpleQuestion';
import ParagraphQuestion from '../components/ParagraphQuestion';
import MultipleAnswerQuestion from '../components/MultipleAnswerQuestion';
import questionTypes from '../constants/questionTypes';


class SurveyBuilder extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input
              type="text"
              onChange={(e) => this.props.changeSurveyName(e.target.value)}
              placeholder="Survey Name" />
          <br />
          <input
              type="text"
              onChange={(e) => this.props.changeSurveyDescription(e.target.value)}
              placeholder="Survey description" />
        </div>
        <div>
          {this.renderSurveyQuestions()}
        </div>
        <div>
          <button
            onClick={() => this.props.addNewQuestion()} >
            Add new Question
          </button>
        </div>
        <div>
          <button onClick={() => this.props.saveSurvey()} >
            Save Survey
          </button>
        </div>
      </div>
    );
  }

  renderSurveyQuestions() {
    return this.props.surveyQuestions.map((question) =>
      this.renderSurveyQuestion({ question }));
  }

  renderSurveyQuestion({ question }) {
    let questionToRender;
    switch (question.questionType) {
      case questionTypes.SHORT_ANSWER:
        questionToRender = (
          <SimpleQuestion
            question={question}
            onChangeQuestionTitle={(title) => this.props.changeQuestionTitle({
                title,
                id: question.id
            })}
          />
        );
        break;
      case questionTypes.PARAGRAPH:
        questionToRender = (
          <ParagraphQuestion
            question={question}
            onChangeQuestionTitle={(title) => this.props.changeQuestionTitle({
                title,
                id: question.id
            })}
          />
        );
        break;
      case questionTypes.MULTIPLE_CHOICE:
        questionToRender = (
          <MultipleAnswerQuestion
            question={question}
            onChangeQuestionTitle={(title) => this.props.changeQuestionTitle({
                title,
                id: question.id
            })}
            onAddNewAnswerOption={() => this.props.addNewAnswerOption({
                questionId: question.id
            })}
            onChangeAnswerOptionTitle={({id, title}) => this.props.changeAnswerOptionTitle({
                title,
                id
            })}
          />
        );
        break;
    }

    return (
      <div key={question.id}>
        <ul>
          <li>
            <button
              onClick={() => this.props.changeQuestionType({
                questionType: questionTypes.SHORT_ANSWER,
                id: question.id
              })}>
              Short answer
            </button>
          </li>
          <li>
            <button
              onClick={() => this.props.changeQuestionType({
                questionType: questionTypes.PARAGRAPH,
                id: question.id
              })}>
              Paragraph
            </button>
          </li>
          <li>
            <button
              onClick={() => this.props.changeQuestionType({
                questionType: questionTypes.MULTIPLE_CHOICE,
                id: question.id
              })}>
              Multiple choices
            </button>
          </li>
        </ul>
        {questionToRender}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    surveyConfig: state.surveyConfig,
    surveyQuestions: getSurveyQuestions(state)
});

SurveyBuilder = connect(mapStateToProps, actions)(SurveyBuilder);

export default SurveyBuilder;