import React from 'react';
import {shallow} from 'enzyme';

import surveyQuestionTypes from '../../../constants/questionTypes';

import QuestionResponseList from './QuestionResponseList';


describe('QuestionResponseList', () => {
  it('should render multiple answer question response', () => {
    const props = {
      question: {
        _id: 'Id_q1',
        title: 'Test question 1',
        type: surveyQuestionTypes.MULTIPLE_ANSWER
      }
    };

    const wrapper = shallow(<QuestionResponseList {...props}/>);

    expect(wrapper.find('AnswerChartRenderer').exists());
  });

  it('should render answer list as question response', () => {
    const props = {
      question: {
        _id: 'Id_q2',
        title: 'Test question 2',
        type: surveyQuestionTypes.SHORT_ANSWER,
        answers: [{
          _id: 'Id_a3',
          answerText: 'First answer'
        }]
      }
    };

    const wrapper = shallow(<QuestionResponseList {...props}/>);

    expect(wrapper.find('AnswerList').exists());
  });
});
