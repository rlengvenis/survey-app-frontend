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
      <li>
        <NavLink to="/signout">Sign out</NavLink>
      </li>
    )
    : [
      <li key={1}>
        <NavLink to="/signin">Sign in</NavLink>
      </li>,
      <li key={2}>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
    ];
};

const Header = (props) => {
  const {surveyId} = props;
  const surveyLink = surveyId ? `/survey?id=${surveyId}` : '/survey';
  console.log('Header render');

  return (
    <header className="app__header">
      <nav>
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink activeClassName="active" to="/builder">Survey Builder</NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink isActive={handler} activeClassName="active" to={surveyLink}>Survey</NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink activeClassName="active" to="/responses">Responses</NavLink>
          </li>

          {renderAuthLinks(props.authenticated)}

        </ul>
      </nav>
    </header>
  );
};

const handler = (match, location) => {
  console.log('handler.match', match);
  console.log('handler.location', location);
  return !!match;
  //location.pathname + location.search === `/tags/${tag.tagId}${search}`
}




export default connect(mapStateToProps, null)(Header);