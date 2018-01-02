import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import AnswerOptionListBuilder from './AnswerOptionListBuilder';


describe('AnswerOptionListBuilder', () => {
  let props;
  let wrapper;

  before(() => {
    props = {
      answerOptions: [{
        _id: 'Id_ao1',
        title: 'Option A',
      }, {
        _id: 'Id_ao2',
        title: 'Option B'
      }],
      onAddNewAnswerOption: sinon.spy(),
      questionId: 'Id_q1'
    };

    wrapper = shallow(<AnswerOptionListBuilder {...props}/>);
  });


  it('should render given options', () => {
    expect(wrapper.find('.survey-builder__answer-option')).to.have.length(2);
  });

  it('should call onAddNewAnswerOption when button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(props.onAddNewAnswerOption.calledOnce);
  })
});