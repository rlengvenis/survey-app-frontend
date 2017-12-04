import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import randomColor from 'randomcolor';

import {populateLabelValues, populateChartData} from '../../utils/chartUtils';
import customPropTypes from '../../constants/customPropTypes';


const AnswerDoughnutChart = ({question}) => {
  const data = {
    labels: populateLabelValues({
      answerOptions: question.answerOptions
    }),
    datasets: [{
      data: populateChartData({question}),
      backgroundColor: Object.values(question.answerOptions).map(answerOption => randomColor({
        luminosity: 'light',
        hue: '#3F51B5'
      }))
    }]
  };

  return <div className="survey-responses__doughnut-chart">
    <Doughnut data={data}/>
  </div>
};

AnswerDoughnutChart.propTypes = {
  question: customPropTypes.question.isRequired
};

export default AnswerDoughnutChart;
