import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as surveyActions from '../../actions/surveyActions';
import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';

class SurveyResponses extends React.Component {
  componentDidMount() {
    this.props.surveyActions.loadSurvey();
  }

  render() {
    const {survey} = this.props;

    if (!survey) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        <h1>{survey.name}</h1>
        <h2>{survey.description}</h2>
        {this.renderQuestions(survey.questions)}
      </div>
    )
  }

  renderQuestions(questions) {
    return questions.map(question => {
      return (
        <div key={question._id}>
          <p>{question.title}</p>
          <ul>
            {this.renderAnswers(question.answers)}
          </ul>

        </div>
      )
    })
  }

  renderAnswers(answers) {
    return answers.map(answer => {
      return (
        <li key={answer._id}>
          {answer.answerText}
        </li>
      )
    });
  }
}

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state)
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch)
});

SurveyResponses = connect(mapStateToProps, mapDispatchToProps)(SurveyResponses);

export default SurveyResponses;
