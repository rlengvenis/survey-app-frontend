import * as actionTypes from '../../constants/actionTypes';
import surveysReducer from './surveysReducer';


describe('surveysReducer', () => {
  let initState;

  before(() => {
    initState = {
      Id_s1: {
        _id: 'Id_s1',
        name: 'Test 1',
        description: 'Test description 1',
        questions: []
      }
    };
  });

  it('should add new loaded survey', () => {
    const action = {
      type: actionTypes.SURVEY_LOAD_SUCCESS,
      payload: {
        entities: {
          surveys: {
            Id_s2: {
              _id: 'Id_s2',
              name: 'Test 2',
              description: 'Test description 2',
            }
          }
        }
      }
    };

    expect(surveysReducer(initState, action)).to.eql({
      Id_s2: {
        _id: 'Id_s2',
        name: 'Test 2',
        description: 'Test description 2'
      }
    });
  });

  it('should init new survey', () => {
    const action = {
      type: actionTypes.SURVEY_INIT_NEW,
      payload: {
        _id: 'Id_s2',
        name: '',
        description: '',
        questions: []
      }
    };

    expect(surveysReducer(initState, action)).to.eql({
      Id_s2: {
        _id: 'Id_s2',
        description: '',
        name: '',
        questions: []
      }
    });
  });

  it('should add new question', () => {
    const action = {
      type: actionTypes.QUESTION_ADD_NEW,
      payload: {
        surveyId: 'Id_s1',
        question: {
          _id: 'Id_q1',
          title: '',
          type: 1,
          answerOptions: []
        }
      }
    };

    expect(surveysReducer(initState, action)).to.eql({
      Id_s1: {
        _id: 'Id_s1',
        description: 'Test description 1',
        name: 'Test 1',
        questions: [
          'Id_q1'
        ]
      }
    })
  });

  it('should delete question', () => {
    const initStateWithQuestion = {
      Id_s1: {
        _id: 'Id_s1',
        name: 'Test 1',
        description: 'Test description 1',
        questions: ['Id_q1', 'Id_q2', 'Id_q3']
      }
    };

    const action = {
      type: actionTypes.QUESTION_DELETE,
      payload: {
        questionId: 'Id_q2',
        surveyId: 'Id_s1'
      }
    };

    expect(surveysReducer(initStateWithQuestion, action)).to.eql({
      Id_s1: {
        _id: 'Id_s1',
        description: 'Test description 1',
        name: 'Test 1',
        questions: ['Id_q1', 'Id_q3']
      }
    })
  });

  it('should reset state', () => {
    const action = {
      type: actionTypes.SURVEY_RESET
    };

    expect(surveysReducer(initState, action)).to.eql({})
  });

  it('should bind form data', () => {
    const action = {
      type: actionTypes.SURVEY_BIND_FORM_DATA,
      payload: {
        surveyName: 'Test 2',
        surveyDescription: 'Test description 2'
      }
    };

    expect(surveysReducer(initState, action)).to.eql({
      Id_s1: {
        _id: 'Id_s1',
        name: 'Test 2',
        description: 'Test description 2',
        questions: []
      }
    });
  });

  it('should keep state immutable', () => {
    const action = {
      type: actionTypes.SURVEY_RESET
    };

    surveysReducer(initState, action);

    expect(initState).to.eql({
      Id_s1: {
        _id: 'Id_s1',
        name: 'Test 1',
        description: 'Test description 1',
        questions: []
      }
    });
  });
});
