import React from 'react';
import PropTypes from 'prop-types';

import chartTypes from '../../../constants/chartTypes';
import customPropTypes from '../../../constants/customPropTypes';

import AnswerBarChart from './AnswerBarChart';
import AnswerDoughnutChart from './AnswerDoughnutChart';


const AnswerChartRenderer = ({question, chartType}) => {
  switch (chartType) {
    default:
    case chartTypes.BAR_CHART: {
      return <AnswerBarChart question={question}/>
    }
    case chartTypes.DOUGHNUT_CHART: {
      return <AnswerDoughnutChart question={question}/>
    }
  }
};

AnswerChartRenderer.propTypes = {
  chartType: PropTypes.number.isRequired,
  question: customPropTypes.question.isRequired
};


export default AnswerChartRenderer;