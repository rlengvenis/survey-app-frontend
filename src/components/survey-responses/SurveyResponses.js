import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions';
import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import customPropTypes from '../../constants/customPropTypes';

import DefaultSpinner from '../shared/DefaultSpinner';


class SurveyResponses extends React.Component {
  componentDidMount() {
    this.props.surveyActions.loadSurvey();
  }

  // componentWillUnmount() {
  //   this.props.surveyActions.resetSurvey();
  // }

  render() {
    const {survey} = this.props;

    if (!survey) {
      return <DefaultSpinner/>;
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

SurveyResponses.propTypes = {
  survey: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(customPropTypes.question).isRequired
  }),
  surveyActions: PropTypes.shape({
    loadSurvey: PropTypes.func.isRequired,
  })
};

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state)
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch)
});

SurveyResponses = connect(mapStateToProps, mapDispatchToProps)(SurveyResponses);

export default SurveyResponses;
