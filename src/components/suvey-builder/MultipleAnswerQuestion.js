import React from 'react';

import SimpleQuestion from './SimpleQuestion';

class MultipleAnswerQuestion extends React.Component {
  render() {
    const {
      question,
      onChangeQuestionTitle
    }  = this.props;

    return (
      <div>
        <SimpleQuestion
          question={question}
          onChangeQuestionTitle={onChangeQuestionTitle}
        />

        {this.renderAnswerOptions()}
      </div>
    );
  }

  renderAnswerOptions() {
    const {
      question,
      onChangeAnswerOptionTitle,
      onAddNewAnswerOption
    } = this.props;

    return (
      <div>
        <ul>
          {question.answerOptions.map((answerOption, index) => {
            return (
              <li key={index}>
                <input
                  type="text"
                  placeholder="Add answer option"
                  value={answerOption.title}
                  onChange={(e) => onChangeAnswerOptionTitle({
                    title: e.target.value,
                    id: answerOption.id
                  })}
                />
              </li>);
          })}
        </ul>
        <button
          onClick={() => onAddNewAnswerOption({
            questionId: question.id
          })}
        >
          Add Option
        </button>
      </div>
    )
  }
}

export default MultipleAnswerQuestion;