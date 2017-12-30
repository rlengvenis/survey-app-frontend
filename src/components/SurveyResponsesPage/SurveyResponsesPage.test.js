import React from 'react';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import {survey} from './testDummyData';

import {SurveyResponsesPage} from './SurveyResponsesPage';
import QuestionList from './QuestionList';
import DefaultSpinner from '../shared/DefaultSpinner';


describe('SurveyResponsesPage component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      survey,
      surveyActions: {
        loadSurvey: spy(),
        resetSurvey: spy()
      }
    };

    wrapper = shallow(<SurveyResponsesPage {...props}/>);
  });

  it('should show loader when props are not loaded', () => {
    const props = {
      surveyActions: {
        loadSurvey: spy(),
        resetSurvey: spy()
      }
    };

    const wrapper = shallow(<SurveyResponsesPage {...props} />);

    expect(wrapper.containsMatchingElement(
      <DefaultSpinner />
    )).to.equal(true);
  });

  it('should load survey when component is mounted', () => {
    expect(props.surveyActions.loadSurvey.callCount).to.equal(1);
  });

  it('should renders QuestionList when mounted', () => {
    const questions = props.survey.questions;

    expect(wrapper.containsMatchingElement(
      <QuestionList questions={questions}/>
    )).to.equal(true);
  });

  it('should reset survey data when component is unmounted', () => {
    wrapper.unmount();
    expect(props.surveyActions.resetSurvey.callCount).to.equal(1);
  });
});
