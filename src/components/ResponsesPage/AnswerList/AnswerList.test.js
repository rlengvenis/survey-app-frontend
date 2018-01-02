import React from 'react';
import {shallow} from 'enzyme';

import AnswerList from './AnswerList';


describe('AnswerList', () => {
  it('should render empty list if no answers provided', () => {
    const answers = [];

    const wrapper = shallow(<AnswerList answers={[]}/>);

    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render list of answers provided', () => {
    const answers = [{
      _id: 'Id_a1',
      answerText: 'Option A'
    }, {
      _id: 'Id_a2',
      answerText: 'Option B'
    }];

    const wrapper = shallow(<AnswerList answers={answers}/>);
    const answerTexts = wrapper.find('li').map(node => node.text());

    expect(answerTexts).to.eql(['Option A', 'Option B']);
  });

});