import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as authActions from '../../actions/authActions';
import FormInput from '../shared/FormInput';


class SignIn extends React.Component {
  componentWillUnmount() {
    this.props.authActions.clearErrors();
  }

  render() {
    const {handleSubmit} = this.props;

    return (
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

        {this.renderAlert()}

        <button
          className="button-raised login-form--submit"
          type="submit"
        >
          Sign in
        </button>
      </form>
    );
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>{this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  handleFormSubmit = ({email, password}) => {
    this.props.authActions.signInUser({email, password});
  };

}

SignIn.propTypes = {
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

SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default reduxForm({
  form: 'signInForm',
  validate
})(SignIn);