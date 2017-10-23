import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions';
import * as questionActions from '../../actions/questionActions';
import customPropTypes from '../../constants/customPropTypes';

import getDenormalizedSurvey from '../../selectors/getDenormalizedSurvey';
import QuestionListBuilder from './QuestionListBuilder';


const mapStateToProps = (state) => ({
  survey: getDenormalizedSurvey(state)
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch),
  questionActions: bindActionCreators(questionActions, dispatch)
});

class SurveyBuilder extends React.Component {
  componentDidMount() {
    this.props.surveyActions.loadSurvey();
  }

  handleSaveSurvey = () => {
    return this.props.surveyActions.saveSurvey(this.props.survey);
  };

  handleChangeSurveyName = (e) => {
    return this.props.surveyActions.changeSurveyName(e.target.value);
  };

  handleChangeSurveyDescription = (e) => {
    return this.props.surveyActions.changeSurveyDescription(e.target.value);
  };

  render() {
    const {
      survey,
      questionActions
    } = this.props;

    return (
      <div className="survey-builder">
        <div className="survey-builder__heading">
          <input
            className="survey-builder__title"
            type="text"
            value={survey.name}
            onChange={this.handleChangeSurveyName}
            placeholder="Survey Name"
          />
          <br/>
          <input
            className="survey-builder__description"
            type="text"
            value={survey.description}
            onChange={this.handleChangeSurveyDescription}
            placeholder="Survey description"
          />
        </div>

        {
          survey.questions.length > 0 &&

          <QuestionListBuilder questions={survey.questions}/>
        }

        <div className="survey-builder__control-group">
          <button
            className="button-raised"
            onClick={questionActions.addNewQuestion}>
            Add new Question
          </button>
        </div>
        <div>
          <button
            className="button-raised"
            onClick={this.handleSaveSurvey}>
            Save Survey
          </button>
        </div>
      </div>
    );
  }
}

SurveyBuilder.propTypes = {
  questionActions: PropTypes.shape({
    addNewQuestion: PropTypes.func.isRequired,
  }).isRequired,
  survey: PropTypes.shape({
    description: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(customPropTypes.question).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  surveyActions: PropTypes.shape({
    changeSurveyDescription: PropTypes.func.isRequired,
    changeSurveyName: PropTypes.func.isRequired,
    saveSurvey: PropTypes.func.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyBuilder);