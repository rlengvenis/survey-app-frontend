import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  surveyId: Object.keys(state.surveys)[0], //Current implementation supports only one survey
  routing: state.routing
});

const renderAuthLinks = (authenticated) => {
  return authenticated ? (
      <li className="navigation__list-item">
        <NavLink to="/signout">Sign out</NavLink>
      </li>
    )
    : [
      <li key={1} className="navigation__list-item">
        <NavLink to="/signin">Sign in</NavLink>
      </li>,
      <li key={2} className="navigation__list-item">
        <NavLink to="/signup">Sign up</NavLink>
      </li>
    ];
};

const Header = (props) => {
  const {surveyId} = props;

  return (
    <header className="app__header">
      <nav>
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink activeClassName="active" to="/builder">
              Survey Builder
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              activeClassName="active"
              to={{
                pathname: '/survey',
                search: surveyId && `id=${surveyId}`
              }}
            >
              Survey
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink activeClassName="active" to="/responses">
              Responses
            </NavLink>
          </li>

          {renderAuthLinks(props.authenticated)}

        </ul>
      </nav>
    </header>
  );
};

export default connect(mapStateToProps, null)(Header);