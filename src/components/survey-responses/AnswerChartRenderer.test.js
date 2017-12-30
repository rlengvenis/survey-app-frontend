import React from 'react';
import {shallow} from 'enzyme';

import chartTypes from '../../constants/chartTypes';
import {survey} from './testDummyData';

import AnswerChartRenderer from './AnswerChartRenderer';
import AnswerBarChart from './AnswerBarChart';
import AnswerDoughnutChart from './AnswerDoughnutChart';


describe('AnswerChartRenderer', () => {
  it('should render AnswerBarChart', () => {
    const question = survey.questions[0];

    const wrapper = shallow(
      <AnswerChartRenderer
        chartType={chartTypes.BAR_CHART}
        question={question}
      />
    );

    expect(wrapper.containsMatchingElement(
      <AnswerBarChart question={question}/>
    )).to.equal(true);
  });

  it('should render AnswerDoughnutChart', () => {
    const question = survey.questions[0];

    const wrapper = shallow(
      <AnswerChartRenderer
        chartType={chartTypes.DOUGHNUT_CHART}
        question={question}
      />
    );

    expect(wrapper.containsMatchingElement(
      <AnswerDoughnutChart question={question}/>
    )).to.equal(true);
  });
});
