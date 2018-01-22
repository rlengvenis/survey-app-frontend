import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as authActions from '../../actions/authActions';


class SignOutPage extends React.PureComponent {
  componentDidMount() {
    this.props.authActions.signOutUser();
  }

  render() {
    return (
      <h2>Sorry to see you go...</h2>
    );
  }
}

SignOutPage.propTypes = {
  authActions: PropTypes.shape({
    signOutUser: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

export default connect(null, mapDispatchToProps)(SignOutPage);