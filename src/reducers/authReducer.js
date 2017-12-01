import * as actionTypes from '../constants/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        error: ''
      }
    }

    case actionTypes.AUTH_CLEAR_ERRORS: {
      return {
        ...state,
        error: ''
      }
    }

    case actionTypes.AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }

    case actionTypes.AUTH_SIGN_OUT_SUCCESS: {
      return {
        ...state,
        authenticated: false
      }
    }

    default: {
      return state;
    }
  }
};

export default authReducer;