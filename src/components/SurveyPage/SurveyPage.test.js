import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {SurveyPage} from './SurveyPage';


describe('SurveyPage', () => {
  let props;

  beforeEach(() => {
    props = {
      history: {},
      location: {
        search: '?id=xxx'
      },
      handleSubmit: sinon.spy(),
      survey: {
        description: '',
        name: '',
        questions: []
      },
      surveyActions: {
        loadSurveyById: sinon.spy(),
        resetSurvey: sinon.spy(),
        saveSurvey: sinon.spy(),
        saveSurveyAnswers: sinon.spy()
      }
    };
  });

  it('should show loader when props are not loaded', () => {
    const propsWithoutSurvey = {...props, survey: undefined};
    const wrapper = shallow(<SurveyPage {...propsWithoutSurvey} />);

    expect(wrapper.find('DefaultSpinner').exists());
  });

  it('should load survey when component is mounted', () => {
    const wrapper = shallow(<SurveyPage {...props}/>);

    expect(props.surveyActions.loadSurveyById.calledOnce);
  });

  it('should reset data when component is unMounted', () => {
    const wrapper = shallow(<SurveyPage {...props}/>);
    wrapper.unmount();

    expect(props.surveyActions.resetSurvey.calledOnce);
  });
});
