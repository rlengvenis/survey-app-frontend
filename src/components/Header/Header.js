import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const MEDIA_MD = 600; // The viewport min size, where mobile navigation bar is not shown any more

export class Header extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isNavListVisible: window.innerWidth >= MEDIA_MD
    };
  }

  render() {
    const {
      surveyId,
      authenticated
    } = this.props;


    const navigationStyle = classnames('navigation__list', {
      'navigation__list--hidden': !this.state.isNavListVisible
    });

    return (
      <header className="app__header">
        <nav>
          <i
            className="material-icons navigation__menu"
            onClick={this.handleNavigationVisibilityToggle}
          >
            menu
          </i>
          <ul className={navigationStyle}>
            <li className="navigation__list-item">
              <NavLink
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={this.handleNavigationVisibilityToggle}
                to="/builder"
              >
                Survey Builder
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={this.handleNavigationVisibilityToggle}
                to={{
                  pathname: '/survey',
                  search: surveyId && `id=${surveyId}`
                }}
              >
                Survey
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={this.handleNavigationVisibilityToggle}
                to="/responses"
              >
                Responses
              </NavLink>
            </li>

            {renderAuthLinks(authenticated, this.handleNavigationVisibilityToggle)}

          </ul>
        </nav>
      </header>
    );
  }

  handleNavigationVisibilityToggle = () => {
    this.setState({
      isNavListVisible: window.innerWidth >= MEDIA_MD || !this.state.isNavListVisible
    });
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
  routing: PropTypes.object,
  surveyId: PropTypes.string
};

const renderAuthLinks = (authenticated, handleNavigationVisibilityToggle) => {
  return authenticated ? (
      <li className="navigation__list-item">
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          onClick={handleNavigationVisibilityToggle}
          to="/sign-out"
        >
          Sign out
        </NavLink>
      </li>
    )
    : [
      <li key={1} className="navigation__list-item">
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          onClick={handleNavigationVisibilityToggle}
          to="/sign-in"
        >
          Sign in
        </NavLink>
      </li>,
      <li key={2} className="navigation__list-item">
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          onClick={handleNavigationVisibilityToggle}
          to="/sign-up"
        >
          Sign up
        </NavLink>
      </li>
    ];
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  surveyId: Object.keys(state.surveys)[0], //Current implementation supports only one survey
  routing: state.routing //Otherwise active links are not updated, even though router setState happens
});

export default connect(mapStateToProps, null)(Header);