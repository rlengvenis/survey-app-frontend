import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as authActions from '../../actions/authActions';


const mapStateToProps = (state) => ({
  errorMessage: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

class SignIn extends React.Component {
  handleFormSubmit = ({email, password}) => {
    this.props.authActions.signInUser({email, password});
  };

  renderInput(field) {
    return (
      <div>
        <input type={field.type} {...field.input} />
        {field.meta.touched && <span>{field.meta.error}</span>}
      </div>
    )
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>{this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset>
          <label>Email:</label>
          <Field
            type="email"
            component={this.renderInput}
            name="email"
          />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field
            type="password"
            component={this.renderInput}
            name="password"
          />
        </fieldset>

        {this.renderAlert()}

        <button type="submit">Sign in</button>
      </form>
    );
  }
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

SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default reduxForm({
  form: 'signInForm',
  validate
})(SignIn);