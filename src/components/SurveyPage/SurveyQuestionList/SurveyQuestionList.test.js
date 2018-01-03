import React from 'react';
import {shallow} from 'enzyme';

import surveyQuestionTypes from '../../../constants/questionTypes';

import SurveyQuestionList from './SurveyQuestionList';


describe('SurveyQuestionList', () => {
  it('should render question list for all questions', () => {
    const props = {
      questions: [{
        _id: 'Id_q1',
        title: 'Test question 1',
        type: surveyQuestionTypes.MULTIPLE_ANSWER
      }, {
        _id: 'Id_q2',
        title: 'Test question 2',
        type: surveyQuestionTypes.SHORT_ANSWER
      }]
    };

    const wrapper = shallow(<SurveyQuestionList {...props}/>);

    expect(wrapper.find('SurveyQuestion')).to.have.length(2);
  });
});
