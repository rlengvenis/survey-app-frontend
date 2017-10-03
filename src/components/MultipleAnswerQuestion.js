import React from 'react';

class MultipleAnswerQuestion extends React.Component {
  render() {
      console.log('questions', this.props.question);
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Question"
          value={this.props.question.title}
          onChange={(e) => this.props.onChangeQuestionTitle(e.target.value)}
        />
        <ul>
          {this.props.question.answerOptions.map((answerOption, index) => {
            return (
              <li key={index}>
                <input
                  type="text"
                  placeholder="Option 1"
                  value={answerOption.title}
                  onChange={(e) => this.props.onChangeAnswerOptionTitle({
                      title: e.target.value,
                      id: answerOption.id
                  })}
                />
              </li>);
          })}
        </ul>
        <button
          onClick={() => this.props.onAddNewAnswerOption({ questionIndex: this.props.questionIndex })}>
          Add Option
        </button>
      </div>
    );
  }
}

export default MultipleAnswerQuestion;