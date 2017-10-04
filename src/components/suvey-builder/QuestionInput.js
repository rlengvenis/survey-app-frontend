import React from 'react';

const QuestionInput = ({
  questionTitle,
  onChangeQuestionTitle
}) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Question"
        value={questionTitle}
        onChange={(e) => onChangeQuestionTitle({
          title: e.target.value
        })}
      />
    </div>
  );
};

export default QuestionInput;
