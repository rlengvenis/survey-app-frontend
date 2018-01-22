import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions/surveyActions';
import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import customPropTypes from '../../constants/customPropTypes';

import SurveyQuestionList from './SurveyQuestionList/SurveyQuestionList';
import DefaultSpinner from '../shared/DefaultSpinner';


export class SurveyPage extends React.PureComponent {
  componentDidMount() {
    const {location, history} = this.props;
    const surveyId = queryString.parse(location.search).id;

    if (!surveyId) {
      history.push('/sign-in');
    }

    this.props.surveyActions.loadSurveyById({surveyId});
  }

  componentWillUnmount() {
    this.props.surveyActions.resetSurvey();
  }

  render() {
    const {
      survey,
      handleSubmit,
      submitting,
      submitSucceeded
    } = this.props;

    if (!survey) {
      return <DefaultSpinner/>;
    }

    if (!survey.questions.length) {
      return <h2>Survey not ready.</h2>;
    }

    if (submitSucceeded) {
       return (
        <h2>Thank you for participating in a survey :)</h2>
      );
    }

    return (
      <article>
        <div>
          <h1>{survey.name}</h1>
          <p className="survey-form__description">{survey.description}</p>
        </div>
        <form
          className="survey-form"
          onSubmit={handleSubmit(this.handleSurveyAnswers)}
        >
          <SurveyQuestionList questions={survey.questions}/>
          <div>
            <button
              className="button-raised survey-form__submit"
              type="submit"
              disabled={submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </article>
    );
  }

  handleSurveyAnswers = (surveyFormData) => {
    return this.props.surveyActions.saveSurveyAnswers({
      surveyId: this.props.survey._id,
      surveyFormData
    });
  };
}

SurveyPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  survey: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(customPropTypes.question).isRequired
  }),
  surveyActions: PropTypes.shape({
    loadSurveyById: PropTypes.func.isRequired,
    resetSurvey: PropTypes.func.isRequired,
    saveSurvey: PropTypes.func.isRequired,
    saveSurveyAnswers: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state)
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch)
});

const SurveyPageForm = reduxForm({
  form: 'SurveyPage',
  shouldValidate: () => true // Due to bug https://github.com/erikras/redux-form/issues/3276
})(SurveyPage);

const ConnectedSurveyPageForm = connect(mapStateToProps, mapDispatchToProps)(SurveyPageForm);

export default ConnectedSurveyPageForm;
