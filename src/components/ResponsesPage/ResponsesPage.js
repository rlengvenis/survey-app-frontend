import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions/surveyActions';
import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import customPropTypes from '../../constants/customPropTypes';

import DefaultSpinner from '../shared/DefaultSpinner';
import ResponsesPageQuestionList from './ResponsesPageQuestionList/ResponsesPageQuestionList';


export class ResponsesPage extends React.Component {
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
        <p className="survey-responses__description">{survey.description}</p>

        <ResponsesPageQuestionList questions={survey.questions}/>
      </div>
    )
  }
}

ResponsesPage.propTypes = {
  survey: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(customPropTypes.question).isRequired
  }),
  surveyActions: PropTypes.shape({
    loadSurvey: PropTypes.func.isRequired,
    resetSurvey: PropTypes.func.isRequired
  })
};

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state)
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponsesPage);
