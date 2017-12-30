import React from 'react';
import {Bar} from 'react-chartjs-2';

import {populateLabelValues, populateChartData} from '../../../utils/chartUtils';
import customPropTypes from '../../../constants/customPropTypes';


const AnswerBarChart = ({question}) => {
  const data = {
    labels: populateLabelValues({
      answerOptions: question.answerOptions
    }),
    datasets: [{
      label: 'Answers',
      backgroundColor: '#3F51B5',
      hoverBackgroundColor: '#4285f4',
      data: populateChartData({question})
    }]
  };

  return (
    <div className="survey-responses__bar-chart">
      <Bar
        data={data}
        height={250}
        options={{
          maintainAspectRatio: false,
          legend: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false
              }
            }]
          }
        }}
      />
    </div>
  )
};

AnswerBarChart.propTypes = {
  question: customPropTypes.question.isRequired
};

export default AnswerBarChart;
