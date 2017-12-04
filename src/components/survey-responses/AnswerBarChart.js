import React from 'react';
import {Bar} from 'react-chartjs-2';

import {populateLabelValues, populateChartData} from '../../utils/chartUtils';

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
    <div className="survey-responses__chart">
      <Bar
        data={data}
        height={250}
        options={{
          maintainAspectRatio: false,
          legend: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
      />
    </div>
  )
};

export default AnswerBarChart;
