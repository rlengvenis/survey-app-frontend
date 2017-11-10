import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as authActions from '../../actions/authActions';

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

class SignOut extends React.Component {
  componentDidMount() {
    this.props.authActions.signOutUser();
  }
  render() {
    return (
      <h2>Sorry to see you go...</h2>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignOut);