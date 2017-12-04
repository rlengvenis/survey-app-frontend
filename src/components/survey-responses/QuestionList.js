import React from 'react';
import QuestionResponses from './QuestionResponses'

const QuestionList = ({questions}) => {
  return questions.map(question => {
    return (
      <QuestionResponses
        key={question._id}
        question={question}
      />
    );
  })
};

export default QuestionList;