import React from 'react';
import {shallow} from 'enzyme';

import chartTypes from '../../../constants/chartTypes';
import surveyQuestionTypes from '../../../constants/questionTypes';

import AnswerChartRenderer from './AnswerChartRenderer';


describe('AnswerChartRenderer', () => {
  let question;

  before(() => {
    question = {
      _id: 'Id_q1',
      title: 'Test question 1',
      type: surveyQuestionTypes.SHORT_ANSWER
    };
  });

  it('should render AnswerBarChart', () => {
    const props = {
      question,
      chartType: chartTypes.BAR_CHART
    };

    const wrapper = shallow(
      <AnswerChartRenderer {...props}/>
    );

    expect(wrapper.find('AnswerBarChart').exists());
  });

  it('should render AnswerDoughnutChart', () => {
    const props = {
      question,
      chartType: chartTypes.DOUGHNUT_CHART
    };

    const wrapper = shallow(<AnswerChartRenderer {...props}/>);

    expect(wrapper.find('AnswerDoughnutChart').exists());
  });
});
