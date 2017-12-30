import React from 'react';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import {survey} from './testDummyData';

import {ResponsesPage} from './ResponsesPage';
import ResponsesPageQuestionList from './ResponsesPageQuestionList/ResponsesPageQuestionList';
import DefaultSpinner from '../shared/DefaultSpinner';


describe('ResponsesPage component', () => {
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

    wrapper = shallow(<ResponsesPage {...props}/>);
  });

  it('should show loader when props are not loaded', () => {
    const props = {
      surveyActions: {
        loadSurvey: spy(),
        resetSurvey: spy()
      }
    };

    const wrapper = shallow(<ResponsesPage {...props} />);

    expect(wrapper.containsMatchingElement(
      <DefaultSpinner />
    )).to.equal(true);
  });

  it('should load survey when component is mounted', () => {
    expect(props.surveyActions.loadSurvey.callCount).to.equal(1);
  });

  it('should renders ResponsesPageQuestionList when mounted', () => {
    const questions = props.survey.questions;

    expect(wrapper.containsMatchingElement(
      <ResponsesPageQuestionList questions={questions}/>
    )).to.equal(true);
  });

  it('should reset survey data when component is unmounted', () => {
    wrapper.unmount();
    expect(props.surveyActions.resetSurvey.callCount).to.equal(1);
  });
});
