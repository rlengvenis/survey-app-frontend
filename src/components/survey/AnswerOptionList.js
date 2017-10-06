import React from 'react';
import AnswerOption from './AnswerOption';

const AnswerOptionList = ({answerOptions}) => {
  return (
    <div>
      <ul className="form-scale">
        {
          answerOptions.map((answerOption) => (

            <li>
              <AnswerOption answerOption={answerOption}/>
            </li>

          ))}
      </ul>
    </div>
  );
};

export default AnswerOptionList;