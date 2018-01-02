import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import surveyQuestionTypes from '../../../constants/questionTypes';

import {QuestionBuilder} from './QuestionBuilder';


describe('QuestionBuilder', () => {
  let props;

  before(() => {
    props = {
      answerOptionActions: {
        addNewAnswerOption: sinon.spy()
      },
      question: {
        _id: 'Id_q1',
        title: 'Test question 1',
        type: surveyQuestionTypes.MULTIPLE_ANSWER,
        answerOptions: [{
          _id: 'Id_ao1',
          title: 'Option A',
        }, {
          _id: 'Id_ao2',
          title: 'Option B'
        }]
      },
      questionActions: {
        changeQuestionType: sinon.spy(),
        deleteQuestion: sinon.spy()
      }
    };
  });

  it('should render question with AnswerOptionListBuilder', () => {
    const wrapper = shallow(<QuestionBuilder {...props} />);
    expect(wrapper.find('AnswerOptionListBuilder')).to.have.length(1);
  });

  it('should render question without AnswerOptionListBuilder', () => {
    const propsWithShortAnswer = {
      ...props,
      question: {
        ...props.question,
        type: surveyQuestionTypes.SHORT_ANSWER
      }
    };
    const wrapper = shallow(<QuestionBuilder {...propsWithShortAnswer}/>);

    expect(wrapper.find('AnswerOptionListBuilder')).to.have.length(0);
  });

  it('should call handleDeleteQuestion callback when delete button pressed', () => {
    const wrapper = shallow(<QuestionBuilder {...props} />);
    wrapper.find('.survey-builder__remove-question-button').simulate('click');

    expect(props.questionActions.deleteQuestion.callOnce);
  });
});