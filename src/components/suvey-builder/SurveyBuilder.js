import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as surveyActions from '../../actions/surveyActions';
import * as questionActions from '../../actions/questionActions';
import customPropTypes from './customPropTypes';

import getSurveyQuestions from '../../selectors/getSurveryQuestions';
import QuestionListBuilder from './QuestionListBuilder';


const mapStateToProps = (state) => ({
  survey: state.survey,
  surveyQuestions: getSurveyQuestions(state)
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch),
  questionActions: bindActionCreators(questionActions, dispatch)
});

class SurveyBuilder extends React.Component {
  componentDidMount() {
   fetch('/api/survey').then((response) => response.json()).then((result) => {
     console.log('result', result);
   });
  }

  render() {
    const {
      survey,
      surveyQuestions,
      surveyActions,
      questionActions
    } = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            value={survey.surveyName}
            onChange={this.handleChangeSurveyName}
            placeholder="Survey Name"
          />
          <br/>
          <input
            type="text"
            value={survey.surveyDescription}
            onChange={this.handleChangeSurveyDescription}
            placeholder="Survey description"
          />
        </div>

        {
          surveyQuestions.length > 0 &&

          <QuestionListBuilder questions={surveyQuestions}/>
        }

        <div>
          <button onClick={questionActions.addNewQuestion}>
            Add new Question
          </button>
        </div>
        <div>
          <button onClick={surveyActions.saveSurvey}>
            Save Survey
          </button>
        </div>
      </div>
    );
  }

  handleChangeSurveyName = (e) => {
    return surveyActions.changeSurveyName(e.target.value);
  }

  handleChangeSurveyDescription = (e) => {
    return surveyActions.changeSurveyDescription(e.target.value);
  }
}

SurveyBuilder.propTypes = {
  questionActions: PropTypes.shape({
    addNewQuestion: PropTypes.func.isRequired,
  }).isRequired,
  surveyActions: PropTypes.shape({
    changeSurveyDescription: PropTypes.func.isRequired,
    changeSurveyName: PropTypes.func.isRequired,
    saveSurvey: PropTypes.func.isRequired
  }).isRequired,
  survey: PropTypes.shape({
    questionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    surveyDescription: PropTypes.string.isRequired,
    surveyName: PropTypes.string.isRequired
  }).isRequired,
  surveyQuestions: PropTypes.arrayOf(customPropTypes.question).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyBuilder);