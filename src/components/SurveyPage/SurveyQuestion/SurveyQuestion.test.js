import React from 'react';
import {shallow} from 'enzyme';

import surveyQuestionTypes from '../../../constants/questionTypes';

import SurveyQuestion from './SurveyQuestion';


describe('SurveyQuestion', () => {
  it('should render question input for short question', () => {
    const props = {
      question: {
        _id: 'Id_q1',
        title: 'Test question 1',
        type: surveyQuestionTypes.MULTIPLE_ANSWER,
        answerOptions: [{
          _id: 'Id_ao1',
          title: 'Option A',
        }]
      }
    };

    const wrapper = shallow(<SurveyQuestion {...props}/>);

    expect(wrapper.find('Field[answerOptions]').exists());
    expect(wrapper.find('Field[type=\'text\']').exists()).is.equal(false);
  });

  it('should render answer option list for multiple answer question', () => {
    const props = {
      question: {
        _id: 'Id_q1',
        title: 'Test question 1',
        type: surveyQuestionTypes.SHORT_ANSWER,
        answerOptions: []
      }
    };

    const wrapper = shallow(<SurveyQuestion {...props}/>);

    expect(wrapper.find('Field[answerOptions]').exists()).is.equal(false);
    expect(wrapper.find('Field[type=\'text\']').exists());
  });

});