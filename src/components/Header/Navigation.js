import React from 'react';
import classnames from 'classnames';
import {NavLink} from 'react-router-dom';


const Navigation = ({
  authenticated,
  surveyId,
  showNavigationDropdown,
  onToggleNavigationDropdown
}) => {

  const navigationStyle = classnames('navigation__list', {
    'navigation__list--visible': showNavigationDropdown
  });

  return (
    <nav>
      <i
        className="material-icons navigation__menu"
        onClick={onToggleNavigationDropdown}
      >
        menu
      </i>
      <ul className={navigationStyle}>
        <li className="navigation__list-item">
          <NavLink
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onToggleNavigationDropdown}
            to="/builder"
          >
            Survey Builder
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onToggleNavigationDropdown}
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
            onClick={onToggleNavigationDropdown}
            to="/responses"
          >
            Responses
          </NavLink>
        </li>

        {renderAuthLinks(authenticated, onToggleNavigationDropdown)}

      </ul>
    </nav>
  );
};

const renderAuthLinks = (authenticated, onToggleNavigationDropdown) => {
  return authenticated ? (
      <li className="navigation__list-item">
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          onClick={onToggleNavigationDropdown}
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
          onClick={onToggleNavigationDropdown}
          to="/sign-in"
        >
          Sign in
        </NavLink>
      </li>,
      <li key={2} className="navigation__list-item">
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          onClick={onToggleNavigationDropdown}
          to="/sign-up"
        >
          Sign up
        </NavLink>
      </li>
    ];
};

export default Navigation;