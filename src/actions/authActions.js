import history from '../history';

import * as actionTypes from '../constants/actionTypes';
import {API_URL} from '../config/appConfig';

const authTypes = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp'
};

export const signInUser = ({email, password}) => (dispatch) => {
  _authenticateUser(dispatch, {authType: authTypes.SIGN_IN, email, password});
};

export const signUpUser = ({email, password}) => (dispatch) => {
  _authenticateUser(dispatch, {authType: authTypes.SIGN_UP, email, password});
};

export const signOutUser = () => (dispatch) => {
  localStorage.removeItem('token');

  dispatch({
    type: actionTypes.AUTH_SIGN_OUT_SUCCESS
  });
};

export const clearErrors = () => ({
  type: actionTypes.AUTH_CLEAR_ERRORS
});

const _authenticateUser = async (dispatch, {authType, email, password}) => {
  const API_ENDPOINT = authType === authTypes.SIGN_IN
    ? `${API_URL}/api/signin`
    : `${API_URL}/api/signup`;

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    });

    if (response.status === 401) {
      throw Error('Email or password is invalid');
    }

    if (String(response.status).startsWith(5)) {
      throw Error('Server error occurred');
    }

    const data = await response.json();

    localStorage.setItem('token', data.token);

    dispatch({
      type: actionTypes.AUTH_SIGN_IN_SUCCESS
    });

    history.push('/builder');

  } catch (err) {
    dispatch({
      type: actionTypes.AUTH_SIGN_IN_ERROR,
      payload: err.message
    });
  }
};
