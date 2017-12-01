import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Doughnut, Bar} from 'react-chartjs-2';
import randomColor from 'randomcolor';

import * as surveyActions from '../../actions/surveyActions';
import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import customPropTypes from '../../constants/customPropTypes';
import surveyQuestionTypes from '../../constants/questionTypes';

import DefaultSpinner from '../shared/DefaultSpinner';


class SurveyResponses extends React.Component {
  componentDidMount() {
    this.props.surveyActions.loadSurvey();
  }

  componentWillUnmount() {
    this.props.surveyActions.resetSurvey();
  }

  render() {
    const {survey} = this.props;

    if (!survey) {
      return <DefaultSpinner/>;
    }

    return (
      <div>
        <h1>{survey.name}</h1>
        <p>{survey.description}</p>
        {this.renderQuestions(survey.questions)}
      </div>
    )
  }

  renderQuestions(questions) {
    return questions.map(question => {
      return this.renderQuestion(question);
    })
  }

  renderQuestion(question) {
    return (
      <div
        key={question._id}
        className="survey-responses__question"
      >
        <h2>{question.title}</h2>

        {
          question.type === surveyQuestionTypes.MULTIPLE_ANSWER
            ? this.renderBarChart(question)
            : this.renderAnswers(question.answers)
        }
      </div>
    )
  }

  renderDonutChart(question) {
    const data = {
      labels: Object.values(question.answerOptions).map(answerOption => answerOption.title),
      datasets: [{
        data: Object.values(question.answerOptions).map(answerOption => {
          const title = answerOption.title;
          return Object.values(question.answers).filter(answer => answer.answerText === title).length
        }),
        backgroundColor: Object.values(question.answerOptions).map(answerOption => randomColor({
          luminosity: 'light',
          hue: '#3F51B5'
        }))
      }]
    };

    return <div key={question._id}>
      <Doughnut data={data}/>
    </div>
  }

  renderBarChart(question) {
    const data = {
      labels: Object.values(question.answerOptions).map(answerOption => answerOption.title),
      datasets: [
        {
          label: 'Answers',
          backgroundColor: '#3F51B5',
          hoverBackgroundColor: '#4285f4',
          data: Object.values(question.answerOptions).map(answerOption => {
            const title = answerOption.title;
            return Object.values(question.answers).filter(answer => answer.answerText === title).length
          })
        }
      ]
    };

    return (
      <div className="survey-responses__chart">
        <Bar
          data={data}
          height={250}
          options={{
            maintainAspectRatio: false,
            legend: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </div>
      )
  }

  renderAnswers(answers) {
    return (
      <ul className="survey-responses__answer-list">
        {
          answers.map(answer => {
            return (
              <li
                className="survey-responses__answer-list-item"
                key={answer._id}
              >
                {answer.answerText}
              </li>
            )
          })
        }
      </ul>
    )
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
