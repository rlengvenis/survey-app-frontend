import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import getSurveyQuestions from '../../selectors/getDenormalizedSurvey';
import * as surveyFormActions from '../../actions/surveyFormActions';
import './Survey.css';

import QuestionList from './QuestionList';


const mapStateToProps = (state) => ({
  survey: state.survey,
  questions: getSurveyQuestions(state),
  surveyForm: state.surveyForm
});

const mapDispatchToProps = (dispatch) => ({
  surveyFormActions: bindActionCreators(surveyFormActions, dispatch)
});

class SurveyForm extends React.Component {

  componentDidMount() {
    const {surveyFormActions, questions} = this.props;

    surveyFormActions.initSurveyFormConfig({
      questionIds: questions.map((question) => question._id)
    });
  }

  render() {
    const {
      survey,
      questions
    } = this.props;

    return (
      <article>
        <div>
          <h1>{survey.name}</h1>
          <p>{survey.description}</p>
        </div>

        <form className="questions-form" method="POST" action="localhost">
          <QuestionList questions={questions}/>
          <div>
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>

      </article>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);