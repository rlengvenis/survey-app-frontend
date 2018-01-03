import React from 'react';
import {shallow} from 'enzyme';

import SurveyAnswerOptionList from './SurveyAnswerOptionList';


describe('SurveyAnswerOptionList', () => {
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
      input: {},
      meta: {}
    };
  });


  it('should render all answer options provided', () => {
    wrapper = shallow(<SurveyAnswerOptionList {...props}/>);
    expect(wrapper.find('.survey-form__radio-group-list-item')).to.have.length(2);
  });

});