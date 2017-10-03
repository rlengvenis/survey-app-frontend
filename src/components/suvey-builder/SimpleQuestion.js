import React from 'react';

class SimpleQuestion extends React.Component {
  render() {
    const {
      question,
      onChangeQuestionTitle
    } = this.props;

    return (
      <div>
        <input
          type="text"
          placeholder="Question"
          value={question.title}
          onChange={(e) => onChangeQuestionTitle({
            id: question.id,
            title: e.target.value
          })}
        />
      </div>
    );
  }
}

export default SimpleQuestion;