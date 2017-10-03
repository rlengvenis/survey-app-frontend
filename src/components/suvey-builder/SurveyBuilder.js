import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions/index';
import getSurveyQuestions from '../../selectors/getSurveryQuestions';

import QuestionBuilder from './QuestionBuilder';

class SurveyBuilder extends React.Component {
  render() {
    const {
      surveyConfig,
      changeSurveyName,
      changeSurveyDescription,
      addNewQuestion,
      saveSurvey
    } = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            value={surveyConfig.surveyName}
            onChange={(e) => changeSurveyName(e.target.value)}
            placeholder="Survey Name"/>
          <br/>
          <input
            type="text"
            value={surveyConfig.surveyDescription}
            onChange={(e) => changeSurveyDescription(e.target.value)}
            placeholder="Survey description"/>
        </div>
        <div>
          {this.renderQuestions()}
        </div>
        <div>
          <button
            onClick={() => addNewQuestion()}>
            Add new Question
          </button>
        </div>
        <div>
          <button
            onClick={() => saveSurvey()}>
            Save Survey
          </button>
        </div>
      </div>
    );
  }

  renderQuestions() {
    return this.props.surveyQuestions.map((question, index) => (
      <QuestionBuilder
        key={index}
        question={question}
      />
    ));
  }

}

const mapStateToProps = (state) => ({
  surveyConfig: state.surveyConfig,
  surveyQuestions: getSurveyQuestions(state)
});

SurveyBuilder = connect(mapStateToProps, actions)(SurveyBuilder);

export default SurveyBuilder;