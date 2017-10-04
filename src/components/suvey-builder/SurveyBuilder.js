import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

import getSurveyQuestions from '../../selectors/getSurveryQuestions';
import QuestionList from './QuestionList';


const mapStateToProps = (state) => ({
  surveyConfig: state.surveyConfig,
  surveyQuestions: getSurveyQuestions(state)
});

const SurveyBuilder = ({
  surveyConfig,
  surveyQuestions,
  changeSurveyName,
  changeSurveyDescription,
  addNewQuestion,
  saveSurvey
}) => {

  const handleChangeSurveyName = (e) =>
    changeSurveyName(e.target.value);

  const handleChangeSurveyDescription = (e) =>
    changeSurveyDescription(e.target.value);

  return (
    <div>
      <div>
        <input
          type="text"
          value={surveyConfig.surveyName}
          onChange={handleChangeSurveyName}
          placeholder="Survey Name"/>
        <br/>
        <input
          type="text"
          value={surveyConfig.surveyDescription}
          onChange={handleChangeSurveyDescription}
          placeholder="Survey description"/>
      </div>
      <div>
        <QuestionList questions={surveyQuestions}/>
      </div>
      <div>
        <button onClick={addNewQuestion}>
          Add new Question
        </button>
      </div>
      <div>
        <button onClick={saveSurvey}>
          Save Survey
        </button>
      </div>
    </div>
  );
};



export default connect(mapStateToProps, actions)(SurveyBuilder);