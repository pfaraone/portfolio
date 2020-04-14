import PropTypes from "prop-types"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Icon from "./Icon"

import headerStyles from "./header.module.scss"
import { NavLink } from "./Header/styles"

const Header = ({ siteTitle }) => {
  return (
    <header className={headerStyles.header}>
      <div
        className={headerStyles.banner}
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1>
          <Link to="/" className={headerStyles.title}>
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                to="/contact/"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/blog/"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/projects/"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/resume/"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Resume
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/pfaraone/portfolio"
                target="_blank"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                <Icon name="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pierce-faraone/"
                target="_blank"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                <Icon name="LinkedIn" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
