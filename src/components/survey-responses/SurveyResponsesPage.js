import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions';
import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import customPropTypes from '../../constants/customPropTypes';

import DefaultSpinner from '../shared/DefaultSpinner';
import QuestionList from './QuestionList';


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

        <QuestionList questions={survey.questions}/>
      </div>
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
