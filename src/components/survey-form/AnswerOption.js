import React from 'react';


const AnswerOption = ({answerOption}) => {
  return (
    <div>
      <label htmlFor="quality1Id">{answerOption.title}</label>
      <input type="radio" name="title" value="1" id="quality1Id"/>
    </div>
  );
};

export default AnswerOption;