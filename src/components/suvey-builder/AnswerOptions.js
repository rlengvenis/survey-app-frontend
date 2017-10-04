import React from 'react';

const AnswerOptions = ({
  questionId,
  answerOptions,
  onChangeAnswerOptionTitle,
  onAddNewAnswerOption
}) => {

  const handleAddNewAnswerOption = () =>
    onAddNewAnswerOption({questionId});

  return (
    <div>
      <ul>
        {answerOptions.map((answerOption) => {
          return (
            <li key={answerOption.id}>
              <input
                type="text"
                placeholder="Add answer option"
                value={answerOption.title}
                onChange={(e) => onChangeAnswerOptionTitle({
                  title: e.target.value,
                  answerOptionId: answerOption.id
                })}
              />
            </li>);
        })}
      </ul>
      <button onClick={handleAddNewAnswerOption}>
        Add Option
      </button>
    </div>
  );
};

export default AnswerOptions;