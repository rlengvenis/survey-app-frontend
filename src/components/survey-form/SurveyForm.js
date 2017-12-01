import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions';
import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import customPropTypes from '../../constants/customPropTypes';

import QuestionList from './QuestionList';
import DefaultSpinner from '../shared/DefaultSpinner';


class SurveyForm extends React.Component {
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

    if (submitSucceeded) {
       return (
        <h2>Thank you for participating in survey :)</h2>
      );
    }

    return (
      <article>
        <div>
          <h1>{survey.name}</h1>
          <p>{survey.description}</p>
        </div>
        <form
          className="survey-form"
          onSubmit={handleSubmit(this.handleSurveyAnswers)}
        >
          <QuestionList questions={survey.questions}/>
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

SurveyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  survey: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(customPropTypes.question).isRequired
  }),
  surveyActions: PropTypes.shape({
    loadSurvey: PropTypes.func.isRequired,
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

SurveyForm = connect(mapStateToProps, mapDispatchToProps)(SurveyForm);

SurveyForm = reduxForm({
  form: 'surveyForm',
  shouldValidate: () => true // Due to bug https://github.com/erikras/redux-form/issues/3276
})(SurveyForm);


export default SurveyForm;
