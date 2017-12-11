import React from 'react';
import {shallow} from 'enzyme';

import {survey} from './testDummyData';

import QuestionResponses from './QuestionResponses';
import AnswerChartRenderer from './AnswerChartRenderer';
import AnswerList from './AnswerList';


describe('QuestionResponses component', () => {
  it('should render multiple answer question response', () => {
    const props = {
      question: survey.questions[0]
    };

    const wrapper = shallow(<QuestionResponses {...props}/>);

    expect(wrapper.containsMatchingElement(
      <AnswerChartRenderer {...props}/>
    )).to.equal(true);
  });

  it('should render answer list as question response', () => {
    const props = {
      question: survey.questions[1]
    };

    const wrapper = shallow(<QuestionResponses {...props}/>);

    expect(wrapper.containsMatchingElement(
      <AnswerList answers={props.question.answers}/>
    )).to.equal(true);
  });
});
