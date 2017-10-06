import React from 'react';
import {connect} from 'react-redux';

import getSurveyQuestions from '../../selectors/getSurveryQuestions';
import './Survey.css';

import QuestionList from './QuestionList';

const mapStateToProps = (state) => ({
  surveyConfig: state.surveyConfig,
  surveyQuestions: getSurveyQuestions(state)
});

const SurveyForm = ({
  surveyConfig,
  surveyQuestions
}) => {

  return (
    <article>
      <h1>{surveyConfig.surveyName}</h1>
      <p>{surveyConfig.surveyDescription}</p>
      <div>
        <form className="questions-form" method="POST" action="localhost">
          <QuestionList questions={surveyQuestions}/>
          <div>
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default connect(mapStateToProps, null)(SurveyForm);