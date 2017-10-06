import React from 'react';
import Question from './Question';

const QuestionList = ({questions}) => {
  return (
    <div>
      {
        questions.map((question) => (
            <Question question={question}/>
        ))
      }
    </div>
  );
};

export default QuestionList;