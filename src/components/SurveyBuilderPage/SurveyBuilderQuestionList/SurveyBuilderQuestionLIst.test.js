import React from 'react';
import {shallow} from 'enzyme';

import surveyQuestionTypes from '../../../constants/questionTypes';

import SurveyBuilderQuestionList from './SurveyBuilderQuestionList';


describe('SurveyBuilderQuestionList', () => {
  let props;
  let wrapper;

  before(() => {
    props = {
      questions: [{
        _id: 'Id_q1',
        title: 'Test question 1',
        type: surveyQuestionTypes.SHORT_ANSWER,
      }, {
        _id: 'Id_q2',
        title: 'Test question 2',
        type: surveyQuestionTypes.SHORT_ANSWER,
      }],
      surveyId: 'Id_s1'
    };

    wrapper = shallow(<SurveyBuilderQuestionList {...props} />);
  });

  it('should render QuestionBuilder for each question', () => {
    expect(wrapper.find('Connect(QuestionBuilder)')).to.have.length(2);
  });
});
