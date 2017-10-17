import React from 'react';

import Question from './Question';


const QuestionList = ({questions}) => {
  return (
    <div>
      {
        questions.map((question) => (
            <Question
              key={question._id}
              question={question}
            />
        ))
      }
    </div>
  );
};

export default QuestionList;