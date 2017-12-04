import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import randomColor from 'randomcolor';

import {populateLabelValues, populateChartData} from '../../utils/chartUtils';


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

  return <div key={question._id}>
    <Doughnut data={data}/>
  </div>
};

export default AnswerDoughnutChart;
