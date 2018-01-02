import React from 'react';
import {shallow, mount, render} from 'enzyme';

import surveyQuestionTypes from '../../../constants/questionTypes';

import ResponsePageQuestionList from './ResponsesPageQuestionList';


describe('ResponsesPageQuestionList', () => {
  it('should render question response element for each question', () => {
    const questions = [{
      _id: 'Id_q1',
      title: 'Test question 1',
      type: surveyQuestionTypes.SHORT_ANSWER
    }, {
      _id: 'Id_q2',
      title: 'Test question 2',
      type: surveyQuestionTypes.SHORT_ANSWER
    }];

    const wrapper = shallow(<ResponsePageQuestionList questions={questions}/>);
    expect(wrapper.find('QuestionResponseList')).to.have.length(2);
  });
});
