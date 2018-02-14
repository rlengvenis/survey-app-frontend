import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

export class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showNavigationDropdown: false
    };
  }

  render() {
    const {
      surveyId,
      authenticated
    } = this.props;

    return (
      <header className="app__header">
        <Navigation
          authenticated={authenticated}
          surveyId={surveyId}
          showNavigationDropdown={this.state.showNavigationDropdown}
          onToggleNavigationDropdown={this.handleNavigationDropdownToggle}
        />
      </header>
    );
  }

  handleNavigationDropdownToggle = () => {
    this.setState({
      showNavigationDropdown: !this.state.showNavigationDropdown
    });
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
  routing: PropTypes.object,
  surveyId: PropTypes.string
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  surveyId: Object.keys(state.surveys)[0], //Current implementation supports only one survey
  routing: state.routing //Otherwise active links are not updated, even though router setState happens
});

export default connect(mapStateToProps, null)(Header);