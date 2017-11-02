import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions';
import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import customPropTypes from '../../constants/customPropTypes';

import QuestionList from './QuestionList';


const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state)
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch)
});

class SurveyForm extends React.Component {
  componentDidMount() {
    if (this.props.survey) {
      this.props.surveyActions.loadSurvey();
    }
  }

  handleSurveyAnswers = (surveyFormData) => {
    this.props.surveyActions.saveSurveyAnswers({surveyFormData});
  };

  render() {
    const {
      survey,
      handleSubmit
    } = this.props;

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
            <button className="button-raised survey-form__submit" type="submit">Submit</button>
          </div>
        </form>
      </article>
    );
  }
}

SurveyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(customPropTypes.question).isRequired
  }).isRequired,
  surveyActions: PropTypes.shape({
    loadSurvey: PropTypes.func.isRequired,
    saveSurvey: PropTypes.func.isRequired,
    saveSurveyAnswers: PropTypes.func.isRequired
  }).isRequired
};

SurveyForm = connect(mapStateToProps, mapDispatchToProps)(SurveyForm);

SurveyForm = reduxForm({form: 'SurveyForm'})(SurveyForm);

export default SurveyForm;
