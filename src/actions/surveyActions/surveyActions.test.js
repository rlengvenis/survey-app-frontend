import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as surveyActions from '../../actions/surveyActions/surveyActions';
import * as types from '../../constants/actionTypes';
import fetchMock from 'fetch-mock';

import {API_URL} from '../../config/appConfig';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.localStorage = {
  getItem: () => {
  }
};

describe('surveyActions', () => {
  describe('loadSurvey', () => {
    let store;

    before(() => {
      store = mockStore({});
    });

    it('should call SURVEY_LOAD_SUCCESS action if survey loaded successfully', () => {
      fetchMock.getOnce(`${API_URL}/api/survey`, {body: {survey: {}}});

      const expectedActions = [{
        type: types.SURVEY_LOAD_SUCCESS,
        payload: {
          entities: {
            surveys: {
              undefined: {}
            }
          },
          result: undefined
        }
      }];

      return store.dispatch(surveyActions.loadSurvey())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        })
    });

    it('should fetch while loading survey', () => {
      fetchMock.getOnce(`${API_URL}/api/survey`, {body: {survey: {}}});

      return store.dispatch(surveyActions.loadSurvey())
        .then(() => {
          expect(fetchMock.done());
        })
    });

    it('should call SURVEY_INIT_NEW if survey is undefined', () => {
      fetchMock.getOnce(`${API_URL}/api/survey`, {body: {survey: undefined}});

      const expectedAction = {
        type: types.SURVEY_INIT_NEW,
        payload: {
          name: '',
          description: '',
          questions: []
        }
      };

      return store.dispatch(surveyActions.loadSurvey())
        .then(() => {
          const storeActionsCalled = store.getActions();

          expect(storeActionsCalled).to.have.length(1);
          expect(storeActionsCalled[0]).excludingEvery('_id').to.eql(expectedAction);
        })
    });

    afterEach(() => {
      fetchMock.restore();
      store.clearActions();
    });
  });
});
