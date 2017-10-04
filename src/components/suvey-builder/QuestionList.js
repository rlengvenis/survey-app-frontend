import React from 'react';
import QuestionBuilder from './QuestionBuilder';

const QuestionList = ({questions}) => {
  if (questions.length === 0) {
    return null;
  }

  return (
    <div>
      {questions.map((question) => (
        <QuestionBuilder
          key={question.id}
          question={question}
        />
      ))}
    </div>
  );
};

export default QuestionList;