import React from 'react';
import {shallow} from 'enzyme';

import chartTypes from '../../../constants/chartTypes';
import {survey} from '../../testDummyData';

import AnswerChartRenderer from './AnswerChartRenderer';


describe('AnswerChartRenderer', () => {
  it('should render AnswerBarChart', () => {
    const question = survey.questions[0];

    const wrapper = shallow(
      <AnswerChartRenderer
        chartType={chartTypes.BAR_CHART}
        question={question}
      />
    );

    expect(wrapper.find('AnswerBarChart')).to.have.length(1);
  });

  it('should render AnswerDoughnutChart', () => {
    const question = survey.questions[0];

    const wrapper = shallow(
      <AnswerChartRenderer
        chartType={chartTypes.DOUGHNUT_CHART}
        question={question}
      />
    );

    expect(wrapper.find('AnswerDoughnutChart')).to.have.length(1);
  });
});
