import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {required} from 'redux-form-validators'

import * as surveyActions from '../../actions/surveyActions/surveyActions';
import * as questionActions from '../../actions/questionActions';
import customPropTypes from '../../constants/customPropTypes';

import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import getInitialFormBuilderValues from '../../selectors/getInitialFormBuilderValues';
import SurveyBuilderQuestionList from './SurveyBuilderQuestionList/SurveyBuilderQuestionList';
import DefaultSpinner from '../shared/DefaultSpinner';
import FormInput from '../shared/FormInput';

export class SurveyBuilderPage extends React.PureComponent {
  componentDidMount() {
    this.props.surveyActions.loadSurvey();
  }

  componentWillUnmount() {
    this.props.surveyActions.resetSurvey();
  }

  render() {
    const {
      survey,
      handleSubmit,
      submitting
    } = this.props;

    if (!survey) {
      return <DefaultSpinner/>;
    }

    return (
      <div className="survey-builder">
        <form onSubmit={handleSubmit(this.handleSaveSurvey)}>
          <div className="survey-builder__heading">
            <Field
              className="input survey-builder__title"
              type="text"
              component={FormInput}
              name="surveyName"
              placeholder="Survey Name"
              validate={[required()]}
            />
            <br/>
            <Field
              className="input survey-builder__description"
              type="text"
              component={FormInput}
              name="surveyDescription"
              placeholder="Survey description"
              validate={[required()]}
            />
          </div>

          {
            survey && survey.questions &&
            <SurveyBuilderQuestionList
              surveyId={survey._id}
              questions={survey.questions}
            />
          }


          <i className="material-icons survey-builder__add-question-button"
             onClick={this.handleAddNewQuestion}
          >
            add_circle_outline
          </i>

          <div>
            <button
              type="submit"
              className="button-raised"
              disabled={submitting}
            >
              Save Survey
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleAddNewQuestion = () => {
    this.props.questionActions.addNewQuestion({
      surveyId: this.props.survey._id
    });
  };

  handleSaveSurvey = (surveyFormData) => {
    return this.props.surveyActions.saveSurvey({surveyFormData});
  };
}

SurveyBuilderPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  questionActions: PropTypes.shape({
    addNewQuestion: PropTypes.func.isRequired,
  }).isRequired,
  submitting: PropTypes.bool.isRequired,
  survey: PropTypes.shape({
    description: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(customPropTypes.question),
    name: PropTypes.string.isRequired
  }),
  surveyActions: PropTypes.shape({
    loadSurvey: PropTypes.func.isRequired,
    resetSurvey: PropTypes.func.isRequired,
    saveSurvey: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state),
  initialValues: getInitialFormBuilderValues(state),
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch),
  questionActions: bindActionCreators(questionActions, dispatch)
});

export const SurveyBuilderPageForm = reduxForm({
  form: 'surveyBuilderForm',
  shouldValidate: () => true // Due to bug https://github.com/erikras/redux-form/issues/3276
})(SurveyBuilderPage);

const ConnectedSurveyBuilderPageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyBuilderPageForm);

export default ConnectedSurveyBuilderPageForm;
