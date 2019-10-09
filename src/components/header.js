import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Logo } from "./Images"

// make a css navbar
// https://bulma.io/documentation/components/navbar/

const Header = ({ siteTitle }) => (
  <header>
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item2" title="MyIP.info">
          <div className="image is-64x64 has-margin-5">
            <Logo />
          </div>
        </Link>

        <a // eslint-disable-line jsx-a11y/anchor-is-valid
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
