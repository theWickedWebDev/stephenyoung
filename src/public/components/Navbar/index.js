import React from 'react';
import { Link } from 'react-router-dom'
import './styles.scss';

const Navbar = props => {
  const { content } = props;

  return (
    <nav className="navbar__component">
      <Link to="/">
        <img src="static/assets/logo.jpg" className="navbar__component-logo"/>
        <span className="navbar__title">TheWickedWebDev</span>
      </Link>
      <ul className="navbar__component-list">
      {content.navbar.links.map((l, key) => {
        if (l.internal) {
          return (
            <li key={key}>
              <Link
                to={l.href}
                className="navbar__link"
                dangerouslySetInnerHTML={{__html: l.name }}
                />
            </li>
          );
        } else {
          return (
            <a
              key={key}
              href={l.href}
              className="navbar__link"
              target="_blank"
              dangerouslySetInnerHTML={{__html: l.name }}
            />
          );
        }
      })}
      </ul>
      <ul className="navbar_component navbar_right">
        <li>
          <a href="https://www.linkedin.com/in/thewickedwebdev/" target="_blank">
            <i class="fab fa-linkedin"/>
          </a>
        </li>

        <li>
          <a href="https://github.com/theWickedWebDev/stephenyoung" target="_blank">
            <i className="fab fa-github-alt"/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  content: require('../../assets/copy/').en_us,
}

export default Navbar;
