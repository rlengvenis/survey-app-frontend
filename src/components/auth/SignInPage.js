import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as authActions from '../../actions/authActions';
import {NOTIFICATION_DISPLAY_INTERVAL} from '../../config/appConfig';

import FormInput from '../shared/FormInput';
import ErrorMessage from '../shared/ErrorMessage';



class SignInPage extends React.PureComponent {
  componentWillUnmount() {
    this.props.authActions.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage) {

      setTimeout(() => {
        this.props.authActions.clearErrors();
      }, NOTIFICATION_DISPLAY_INTERVAL);
    }
  }

  render() {
    const {
      handleSubmit,
      errorMessage
    } = this.props;

    return (
      <div>
        {
          errorMessage &&
          <ErrorMessage message={errorMessage}/>
        }

        <form
          className="login-form"
          onSubmit={handleSubmit(this.handleFormSubmit)}
        >
          <div className="login-form--field">
            <Field
              type="email"
              component={FormInput}
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="login-form--field">
            <Field
              type="password"
              component={FormInput}
              placeholder="Password"
              name="password"
            />
          </div>

          <button
            className="button-raised login-form--submit"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  handleFormSubmit = ({email, password}) => {
    this.props.authActions.signInUser({email, password});
  };

}

SignInPage.propTypes = {
  authActions: PropTypes.shape({
    clearErrors: PropTypes.func.isRequired,
    signInUser: PropTypes.func.isRequired
  }).isRequired,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

const validate = (formProps) => {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

SignInPage = connect(mapStateToProps, mapDispatchToProps)(SignInPage);

export default reduxForm({
  form: 'signInForm',
  validate
})(SignInPage);