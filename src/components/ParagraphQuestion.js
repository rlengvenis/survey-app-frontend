import React from 'react';

class ParagraphQuestion extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Question"
          value={this.props.question.title}
          onChange={(e) => this.props.onChangeQuestionTitle(e.target.value)}
        />
      </div>
    );
  }
}

export default ParagraphQuestion;