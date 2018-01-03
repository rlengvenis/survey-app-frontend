import React from 'react';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import {ResponsesPage} from './ResponsesPage';


describe('ResponsesPage', () => {
  let props;

  beforeEach(() => {
    props = {
      survey: {
        _id: 'Id_s1',
        name: 'Test',
        description: 'Test Description',
        questions: []
      },
      surveyActions: {
        loadSurvey: spy(),
        resetSurvey: spy()
      }
    };
  });

  it('should show loader when props are not loaded', () => {
    const propsWithoutSurvey = {...props, survey: undefined};
    const wrapper = shallow(<ResponsesPage {...propsWithoutSurvey} />);

    expect(wrapper.find('DefaultSpinner').exists());
  });

  it('should load survey when component is mounted', () => {
    const wrapper = shallow(<ResponsesPage {...props}/>);
    expect(props.surveyActions.loadSurvey.calledOnce);
  });

  it('should render ResponsesPageQuestionList when mounted', () => {
    const wrapper = shallow(<ResponsesPage {...props}/>);
    expect(wrapper.find('ResponsesPageQuestionList').exists());
  });

  it('should reset survey data when component is unmounted', () => {
    const wrapper = shallow(<ResponsesPage {...props}/>);
    wrapper.unmount();
    expect(props.surveyActions.resetSurvey.callOnce);
  });

});
