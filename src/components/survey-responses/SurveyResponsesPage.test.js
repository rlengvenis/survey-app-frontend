import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import surveyQuestionTypes from '../../constants/questionTypes';

import {SurveyResponsesPage} from './SurveyResponsesPage';
import QuestionList from './QuestionList';
import AnswerList from './AnswerList';
import AnswerBarChart from './AnswerBarChart';


describe('SurveyResponsesPage component', () => {
  let props;

  beforeEach(() => {
    props = {
      survey: {
        name: 'Test',
        description: 'Test Description',
        questions: [{
          _id: 'Id_1',
          title: 'Test question 1',
          type: surveyQuestionTypes.MULTIPLE_ANSWER,
          answerOptions: [{
            _id: 'Id_2',
            title: 'Option A',
          }, {
            _id: 'Id_3',
            title: 'Option B'
          }],
          answers: [{
            _id: 'Id_4',
            answerText: 'Option A'
          }, {
            _id: 'Id_5',
            answerText: 'Option B'
          }]
        }]
      },
      surveyActions: {
        loadSurvey: spy(),
        resetSurvey: spy()
      }
    }
  });

  it('all inner components exist', () => {
    const wrapper = mount(<SurveyResponsesPage {...props}/>);
    expect(wrapper.containsAllMatchingElements([
      <AnswerBarChart/>
    ])).to.equal(true);
  });
});


