import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions';
import * as questionActions from '../../actions/questionActions';

import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import getInitialFormBuilderValues from '../../selectors/getInitialFormBuilderValues';
import QuestionListBuilder from './QuestionListBuilder';

class SurveyBuilder extends React.Component {
  componentDidMount() {
    this.props.surveyActions.loadSurvey();
  }

  componentWillUnmount() {
    this.props.surveyActions.resetSurvey();
  }

  render() {
    const {
      survey,
      handleSubmit
    } = this.props;

    return (
      <div className="survey-builder">
        <form onSubmit={handleSubmit(this.handleSaveSurvey)}>
          <div className="survey-builder__heading">
            <Field
              className="survey-builder__title"
              type="text"
              component="input"
              name="surveyName"
              placeholder="Survey Name"
            />
            <br/>
            <Field
              className="survey-builder__description"
              type="text"
              component="input"
              name="surveyDescription"
              placeholder="Survey description"
            />
          </div>

          {
            survey && survey.questions &&
            <QuestionListBuilder
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
    this.props.surveyActions.saveSurvey({surveyFormData});
  };

  handleChangeSurveyName = (e) => {
    return this.props.surveyActions.changeSurveyName(e.target.value);
  };

  handleChangeSurveyDescription = (e) => {
    return this.props.surveyActions.changeSurveyDescription(e.target.value);
  };
}

// SurveyBuilder.propTypes = {
//   questionActions: PropTypes.shape({
//     addNewQuestion: PropTypes.func.isRequired,
//   }).isRequired,
//   survey: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     questions: PropTypes.arrayOf(customPropTypes.question).isRequired,
//     name: PropTypes.string.isRequired
//   }).isRequired,
//   surveyActions: PropTypes.shape({
//     changeSurveyDescription: PropTypes.func.isRequired,
//     changeSurveyName: PropTypes.func.isRequired,
//     saveSurvey: PropTypes.func.isRequired
//   }).isRequired
// };

const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state),
  initialValues: getInitialFormBuilderValues(state),
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch),
  questionActions: bindActionCreators(questionActions, dispatch)
});

SurveyBuilder = reduxForm({
  form: 'surveyBuilderForm',
  // enableReinitialize: true
})(SurveyBuilder);

SurveyBuilder = connect(mapStateToProps, mapDispatchToProps)(SurveyBuilder);


export default SurveyBuilder;
