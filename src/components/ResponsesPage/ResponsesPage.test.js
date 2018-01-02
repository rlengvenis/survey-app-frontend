import React from 'react';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import {survey} from '../testDummyData';

import {ResponsesPage} from './ResponsesPage';


describe('ResponsesPage', () => {
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
    const propsWithoutSurvey = {...props, survey: undefined};
    const wrapper = shallow(<ResponsesPage {...propsWithoutSurvey} />);

    expect(wrapper.find('DefaultSpinner')).to.have.length(1);
  });

  it('should load survey when component is mounted', () => {
    expect(props.surveyActions.loadSurvey.calledOnce);
  });

  it('should renders ResponsesPageQuestionList when mounted', () => {
    expect(wrapper.find('ResponsesPageQuestionList')).to.have.length(1);
  });

  it('should reset survey data when component is unmounted', () => {
    wrapper.unmount();
    expect(props.surveyActions.resetSurvey.callOnce);
  });

});
