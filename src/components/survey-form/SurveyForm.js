import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getSurveyQuestions from '../../selectors/getSurveryQuestions';
import * as surveyFormActions from '../../actions/surveyFormActions';
import './Survey.css';

import QuestionList from './QuestionList';


const mapStateToProps = (state) => ({
  survey: state.survey,
  surveyQuestions: getSurveyQuestions(state),
  surveyForm: state.surveyForm
});

const mapDispatchToProps = (dispatch) => ({
  surveyFormActions: bindActionCreators(surveyFormActions, dispatch)
});

class SurveyForm extends React.Component {

  componentDidMount() {
    const {surveyFormActions, surveyQuestions} = this.props;

    surveyFormActions.initSurveyFormConfig({
      questionIds: surveyQuestions.map((question) => question.id)
    });
  }

  render() {
    const {
      survey,
      surveyQuestions
    } = this.props;

    return (
      <article>
        <div>
          <h1>{survey.surveyName}</h1>
          <p>{survey.surveyDescription}</p>
        </div>

        <form className="questions-form" method="POST" action="localhost">
          <QuestionList questions={surveyQuestions}/>
          <div>
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>

      </article>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);