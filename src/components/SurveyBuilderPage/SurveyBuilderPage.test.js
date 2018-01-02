import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {SurveyBuilderPage} from './SurveyBuilderPage';


describe('SurveyBuilderPage', () => {
  let props;

  before(() => {
    props = {
      survey: {
        _id: 'Id_s1',
        name: '',
        description: ''
      },
      handleSubmit: sinon.spy(),
      submitting: false,
      questionActions: {
        addNewQuestion: sinon.spy()
      },
      surveyActions: {
        loadSurvey: sinon.spy(),
        resetSurvey: sinon.spy(),
        saveSurvey: sinon.spy()
      }
    };
  });

  it('should show default spinner when survey not loaded', () => {
    const propsWithoutSurvey = {...props, survey: undefined};
    const wrapper = shallow(<SurveyBuilderPage {...propsWithoutSurvey}/>);

    expect(wrapper.find('DefaultSpinner')).to.have.length(1);
  });

  it('should not show SurveyBuilderQuestionList when survey is new', () => {
    const wrapper = shallow(<SurveyBuilderPage {...props}/>);

    expect(wrapper.find('SurveyBuilderQuestionList')).to.have.length(0);
  });

  it('should call addNewQuestion handler when Add new question button is clicked', () => {
    const wrapper = shallow(<SurveyBuilderPage {...props}/>);
    wrapper.find('.survey-builder__add-question-button').simulate('click');

    expect(props.questionActions.addNewQuestion.calledOnce);
  });

  it('should reset survey data when component is unmounted', () => {
    const wrapper = shallow(<SurveyBuilderPage {...props}/>);
    wrapper.unmount();

    expect(props.surveyActions.resetSurvey.calledOnce);
  });
});
