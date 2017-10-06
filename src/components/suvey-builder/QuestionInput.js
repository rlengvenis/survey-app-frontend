import React from 'react';

const QuestionInput = ({
  questionTitle,
  onChangeQuestionTitle
}) => {

  const handleQuestionTitleChange = (e) =>
    onChangeQuestionTitle({title: e.target.value});

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Question"
        value={questionTitle}
        onChange={handleQuestionTitleChange}
      />
    </div>
  );
};

export default QuestionInput;
