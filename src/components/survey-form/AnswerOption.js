import React from 'react';


const AnswerOption = ({answerOption}) => {
  return (
    <li>
      <label htmlFor="quality1Id">{answerOption.title}</label>
      <input type="radio" name="title" value="1" id="quality1Id"/>
    </li>
  );
};

export default AnswerOption;