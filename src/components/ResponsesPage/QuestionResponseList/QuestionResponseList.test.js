import React from 'react';
import {shallow} from 'enzyme';

import {survey} from '../../testDummyData';
import chartTypes from '../../../constants/chartTypes';

import QuestionResponseList from './QuestionResponseList';


describe('QuestionResponseList', () => {
  it('should render multiple answer question response', () => {
    const props = {
      question: survey.questions[0],
      chartType: chartTypes.BAR_CHART
    };

    const wrapper = shallow(<QuestionResponseList {...props}/>);

    expect(wrapper.find('AnswerChartRenderer')).to.have.length(1);
  });

  it('should render answer list as question response', () => {
    const props = {
      question: survey.questions[1]
    };

    const wrapper = shallow(<QuestionResponseList {...props}/>);

    expect(wrapper.find('AnswerList')).to.have.length(1);
  });
});
