import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as surveyActions  from '../../actions/surveyActions';
import * as questionActions  from '../../actions/questionActions';
import customPropTypes from './customPropTypes';

import getSurveyQuestions from '../../selectors/getSurveryQuestions';
import QuestionListBuilder from './QuestionListBuilder';


const mapStateToProps = (state) => ({
  surveyConfig: state.surveyConfig,
  surveyQuestions: getSurveyQuestions(state)
});

const mapDispatchToProps = (dispatch) => ({
  surveyActions: bindActionCreators(surveyActions, dispatch),
  questionActions: bindActionCreators(questionActions, dispatch)
});

const SurveyBuilder = ({
  surveyConfig,
  surveyQuestions,
  surveyActions,
  questionActions
}) => {

  const handleChangeSurveyName = (e) => {
    return surveyActions.changeSurveyName(e.target.value);
  };


  const handleChangeSurveyDescription = (e) => {
    return surveyActions.changeSurveyDescription(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={surveyConfig.surveyName}
          onChange={handleChangeSurveyName}
          placeholder="Survey Name"
        />
        <br/>
        <input
          type="text"
          value={surveyConfig.surveyDescription}
          onChange={handleChangeSurveyDescription}
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
};

SurveyBuilder.propTypes = {
  questionActions: PropTypes.shape({
    addNewQuestion: PropTypes.func.isRequired,
  }).isRequired,
  surveyActions: PropTypes.shape({
    changeSurveyDescription: PropTypes.func.isRequired,
    changeSurveyName: PropTypes.func.isRequired,
    saveSurvey: PropTypes.func.isRequired
  }).isRequired,
  surveyConfig: PropTypes.shape({
    questionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    surveyDescription: PropTypes.string.isRequired,
    surveyName: PropTypes.string.isRequired
  }).isRequired,
  surveyQuestions: PropTypes.arrayOf(customPropTypes.question).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyBuilder);