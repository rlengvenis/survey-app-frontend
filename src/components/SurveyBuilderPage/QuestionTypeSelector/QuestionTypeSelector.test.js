import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import questionTypes from '../../../constants/questionTypes';

import QuestionTypeSelector from './QuestionTypeSelector';


describe('QuestionTypeSelector', () => {
  let props;
  let wrapper;

  before(() => {
    props = {
      onSelectQuestionType: sinon.spy(),
      questionType: questionTypes.SHORT_ANSWER
    };

    wrapper = shallow(<QuestionTypeSelector {...props} />);
  });

  it('should call first btn onSelectQuestionType callback with SHORT_ANSWER type', () => {
    wrapper.find('button').first().simulate('click');

    expect(props.onSelectQuestionType.calledWith({
      type: questionTypes.SHORT_ANSWER
    }));
  });


  it('should call last btn onSelectQuestionType callback with SHORT_ANSWER type', () => {
    wrapper.find('button').last().simulate('click');

    expect(props.onSelectQuestionType.calledWith({
      type: questionTypes.MULTIPLE_ANSWER
    }));
  });
});