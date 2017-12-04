import React from 'react';

import {CHART_TYPE_CONFIGURED} from '../../config/appConfig';
import chartTypes from '../../constants/chartTypes';

import AnswerBarChart from './AnswerBarChart';
import AnswerDoughnutChart from './AnswerDoughnutChart';


const AnswerChartRenderer = ({question}) => {
  switch (CHART_TYPE_CONFIGURED) {
    default:
    case chartTypes.BAR_CHART: {
      return <AnswerBarChart question={question}/>
    }
    case chartTypes.DOUGHNUT_CHART: {
      return <AnswerDoughnutChart question={question}/>
    }
  }
};

export default AnswerChartRenderer;